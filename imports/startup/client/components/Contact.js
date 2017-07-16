import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EditContact from './EditContact'
import classnames from 'classnames'

class Contact extends Component {

  constructor(props) {
    // contact, onRemove, toggleEditContact
    super(props)
    this.state = {
      isEdited: false,
      contact: props.contact,
      name: props.contact.name,
      phone: props.contact.phone,
      email: props.contact.email,
      imageUrl: props.contact.imageUrl,
      group: props.contact.group
    }

  }
  handleRemove = () => {
    // let conformation = confirm('Are you sure you want to delete ' + this.state.contact.name + '?')
    // remove when deploy
    conformation = true

    if(conformation){
      this.props.onRemove(this.state.contact.id)
    } else {
      console.log("Cancelled")

    }
  }
  handleEdit = (id, name, phone, email, imageUrl, group) => {
    this.handleToggleContact()
    this.setState({
      name: name,
      phone: phone,
      email: email,
      imageUrl: imageUrl,
      group: group
    })
    this.props.onEdit(id, name, phone, email, imageUrl, group)
  }
  handleToggleContact = () => {
    this.setState({
      isEdited: !this.state.isEdited
    })
  }
  onSelectChange = (selected) => {
    this.setState({ group: selected})
  }
  render() {
    return (
      <div className='row top-buffer'>
        <div className='col-xs-3'>
          <img
            className='img-circle img-responsive'
            src={this.state.imageUrl}
            alt="Profile picture"
          />
        </div>

        <div className='col-xs-6'>
          <EditContact
            className='form-inline'
            contact={this.state.contact}
            isEdited={this.state.isEdited}
            handleEdit={this.handleEdit}
            handleSelect={this.onSelectChange}
            handleToggleContact={this.handleToggleContact}
          />
        </div>

        <div className='btn-group col-xs-3'>

          <button
            className='btn btn-sm btn-default edit-comment'
            onClick={this.handleToggleContact}>
            <span className="glyphicon glyphicon-pencil"></span>
          </button>
          <button
            className='btn btn-sm btn-default remove-comment'
            onClick={this.handleRemove}>
            <span className="glyphicon glyphicon-remove"></span>
          </button>
        </div>

      </div>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}

export default Contact
