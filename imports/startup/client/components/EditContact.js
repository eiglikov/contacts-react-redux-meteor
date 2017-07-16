import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { connect } from 'react-redux'

import GroupSelector from './GroupSelector'
import ContactForm from './ContactForm'

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
    const {state: {name, phone, email, imageUrl, group, isEdited}} = this
    const contact = this.state
    console.log("contact", contact);


    return(
      isEdited ?
      <ContactForm
        onSubmit={this.handleEditContact}
        onClear={this.props.handleToggleContact}
        contact={contact}
        showIcons={false}
        small={true}
      />
      :
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
  handleToggleContact: PropTypes.func.isRequired,
}

export default connect()(EditContact)
