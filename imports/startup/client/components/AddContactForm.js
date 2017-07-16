import React from 'react'
import PropTypes from 'prop-types'
import { Bert } from 'meteor/themeteorchef:bert'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import GroupSelector from './GroupSelector'
import ContactForm from './ContactForm'


const AddContactForm = ({ dispatch }) => {

  const handleAddContactForm = (name, phone, email, imageUrl, group) => {
    if (!name.length && !phone.length && !email.length){
      console.log("Fields cannot be empty")
      Bert.alert("Fields cannot be empty", 'danger')
    } else {
      dispatch(addTodo(name, phone, email, chooseImage(imageUrl), group))
    }
  }
  const chooseImage = (imageUrl) => {
    if (!imageUrl.length)
      //default image placeholder
      return 'https://trendytheme.net/wp-content/themes/trendytheme/img/client.png'
     else
      return imageUrl
  }

  return (
    <ContactForm
      onSubmit={handleAddContactForm}
      showIcons={true}
      small={false}
    />
  )
}

AddContactForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(AddContactForm)
