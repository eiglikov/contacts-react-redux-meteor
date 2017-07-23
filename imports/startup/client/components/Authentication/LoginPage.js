import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { signIn } from '../../actions'
import AuthForm from './AuthForm'

const LoginPage = ({ history, dispatch }) => {
  const handleSubmit = (name, email, password, handleError) => {
    dispatch(signIn(email, password, history, handleError))
  }
  return (
    <AuthForm
      isSignUp={false}
      onSubmit={handleSubmit}
    />
  )
}

LoginPage.PropTypes = {
  history: PropTypes.object.isRequired
}

export default connect()(LoginPage)
