import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import GroupSelector from './GroupSelector'

class EditContact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEdited: props.isEdited,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({isEdited: nextProps.isEdited})
  }
  handleEditContact = (name, phone, email, imageUrl, group) => {
    console.log("contact ->", name, phone, email, imageUrl, group);
    this.props.handleEdit(this.props.contact.id, name, phone, email, imageUrl, group)
  }
  handleSelectOptions = (selected) => {
    console.log('group handleSelect', selected)
    this.props.handleSelect(selected)
  }

  render(){
    let name = this.props.contact.name
    let phone = this.props.contact.phone
    let email = this.props.contact.email
    let imageUrl = this.props.contact.imageUrl
    let group = this.props.contact.group;
    console.log("group in render", group);


    if (this.state.isEdited)
    return(
      <form className='form-inline'>
        <input
          className='form-control'
          type="text"
          placeholder='name'
          defaultValue={name}
          ref={node => {
            name = node
          }}
        />
        <input
          className='form-control'
          type="text"
          placeholder='phone'
          defaultValue={phone}
          ref={node => {
            phone = node
          }}
        />
        <input
          className='form-control'
          type="text"
          placeholder='example@email.com'
          defaultValue={email}
          ref={node => {
            email = node
          }}
        />
        <input
          className='form-control'
          type="text"
          placeholder='image url'
          defaultValue={imageUrl}
          ref={node => {
            imageUrl = node
          }}
        />
        <GroupSelector
          onSelect={this.handleSelectOptions}
          hideIcon={true}
          selectedOption={group}
        />

        <button
          className='btn btn-primary'
          onClick={() => this.handleEditContact(name.value, phone.value, email.value, imageUrl.value, group)}>
          Submit
        </button>

      </form>
    )

    return (
      <div className="row">
        <div className="col-xs-8">
          <h4>{name}</h4>
          <p>{phone}</p>
          <p>{email}</p>

        </div>
      </div>
    )

  }
}


EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  isEdited: PropTypes.bool.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
}

export default connect()(EditContact)
