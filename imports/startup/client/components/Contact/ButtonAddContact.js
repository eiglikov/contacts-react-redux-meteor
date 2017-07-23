import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Button = ({ toggleModal }) => {
  return (
    <button type="button"
      className="btn btn-primary btn-circle btn-xl"
      onClick={toggleModal}
    >+</button>
  )
}

Button.PropTypes = {
  toggleModule: PropTypes.func.isRequired
}

export default Button
