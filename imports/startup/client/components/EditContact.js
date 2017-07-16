import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import GroupSelector from './GroupSelector'

class EditContact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.contact.name,
      phone: this.props.contact.phone,
      email: this.props.contact.email,
      imageUrl: this.props.contact.imageUrl,
      group: this.props.contact.group,
      isEdited: props.isEdited,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({isEdited: nextProps.isEdited})
  }
  handleSubmit = (e, name, phone, email, imageUrl, group) => {
    e.preventDefault()
    console.log("handleEdit Submit", name, phone, email, imageUrl, group);
    this.setState({
      name: name,
      phone: phone,
      email: email,
      imageUrl: imageUrl,
      group: group
    })
    this.handleEditContact(name, phone, email, imageUrl, group)
  }
  handleEditContact = (name, phone, email, imageUrl, group) => {
    console.log("contact ->", name, phone, email, imageUrl, group);
    this.props.handleEdit(this.props.contact.id, name, phone, email, imageUrl, group)
  }
  handleSelectOptions = (selected) => {
    console.log('group handleSelect', selected)
    this.setState({group: selected});
    this.props.handleSelect(selected)
  }

  render(){
    let name = this.state.name
    let phone = this.state.phone
    let email = this.state.email
    let imageUrl = this.state.imageUrl
    let group = this.state.group
    console.log("group in render", group)


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
          smallButtons={true}
          selectedOption={group}
        />

        <input
          type='submit'
          className='btn btn-primary'
          value='Submit'
          onClick={(event) => this.handleSubmit(event, name.value, phone.value, email.value, imageUrl.value, group)}
        />

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
