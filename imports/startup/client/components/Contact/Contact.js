import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import GroupButton from '../Groups/GroupButton'
import ContactForm from './ContactForm'

class Contact extends Component {
  constructor(props) {
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
  componentDidUpdate(prevProps) {
    if (this.props.contact !== prevProps.contact) {
      this.setState({
        contact: this.props.contact,
        name: this.props.contact.name,
        phone: this.props.contact.phone,
        email: this.props.contact.email,
        imageUrl: this.props.contact.imageUrl,
        group: this.props.contact.group
      })
    }
  }
  handleRemove = () => {
    let conformation = confirm('Are you sure you want to delete ' + this.state.contact.name + '?')
    if(conformation){
      this.props.onRemove(this.state.contact.id)
    } else {
      console.log("Cancelled")
    }
  }
  handleEdit = (name, phone, email, imageUrl, group, handleError) => {
    this.handleToggleContact()
    this.props.onEdit(this.props.contact.id, name, phone, email, imageUrl, group)
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
    const {state: {name, phone, email, imageUrl, isEdited}} = this
    const contact = this.state
    return (
      <div>
        <div className='contact row top-buffer' onClick={this.handleToggleContact}>

          <div className='col-xs-3'>
            <img
              className='img-circle img-responsive'
              src={imageUrl}
              alt="Profile picture"
            />
          </div>
          <div className='col-xs-6'>
            <div className="row">
              <div className="col-xs-8">
                <h4>{name}</h4>
                <p>{phone}</p>
                <p><a href={`mailto:${email}`}>{email}</a></p>
              </div>
            </div>
          </div>
        </div>

        { isEdited ?
          <ContactForm
            onSubmit={this.handleEdit}
            onClear={this.handleToggleContact}
            onRemove={this.handleRemove}
            handleSelect={this.onSelectChange}
            contact={contact}
            visibile={isEdited}
            detailView={true}
          />
          : ''
        }
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
