import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
  handleAddContactForm = (name, phone, email, imageUrl, group, handleError) => {
    if (!name.length && !phone.length && !email.length){
      handleError('Fields cannot be empty')
    } else {
      this.toggleModal()
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
