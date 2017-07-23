import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { withHistory } from 'react-router-dom'
import { signUp } from '../../actions'
import AuthForm from './AuthForm'

const SignupPage = ({ history, dispatch }) => {
  const handleSubmit = (name, email, password, handleError) => {
      dispatch(signUp(name, email, password, history, handleError))
  }
  return (
    <AuthForm
      isSignUp={true}
      onSubmit={handleSubmit}
    />
  )
}

SignupPage.PropTypes = {
  history: PropTypes.object.isRequired
}
export default connect()(SignupPage)
