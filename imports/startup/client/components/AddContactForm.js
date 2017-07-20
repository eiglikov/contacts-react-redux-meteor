import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Bert } from 'meteor/themeteorchef:bert'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import GroupSelector from './GroupSelector'
import ContactForm from './ContactForm'
import Button from './Button'


class AddContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibile: false
    }
  }
  handleAddContactForm = (name, phone, email, imageUrl, group) => {
    if (!name.length && !phone.length && !email.length){
      console.log("Fields cannot be empty")
      Bert.alert("Fields cannot be empty", 'danger')
    } else {
      this.props.dispatch(addTodo(name, phone, email, this.chooseImage(imageUrl), group))
    }
  }
  chooseImage = (imageUrl) => {
    if (!imageUrl.length)
    //default image placeholder
    return 'https://trendytheme.net/wp-content/themes/trendytheme/img/client.png'
    else
    return imageUrl
  }
  toggleModal = () => {
    console.log("toggle", this.state.visibile);
    this.setState({
      visibile: !this.state.visibile
    })
  }
  render() {
    return (
      <div>
        <ContactForm
          onSubmit={this.handleAddContactForm}
          onClear={this.toggleModal}
          visibile={this.state.visibile}
          detailView={false}
          createView={true}
        />
        <Button toggleModal={this.toggleModal}/>
      </div>
    )
  }
}

AddContactForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(AddContactForm)
