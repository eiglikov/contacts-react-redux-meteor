import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { validate } from 'validate.js'
import * as validationRules from '../../helpers/validation'

class AuthForm extends Component {
  constructor(props){
    super(props)
    this.state = { error: '' }
  }
  handleError = (err) => {
    if (typeof err == 'object'){
      let firstErr = err[Object.keys(err)[0]][0];
      this.setState({ error: firstErr })
    } else {
      this.setState({ error: err })
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let name = ''
    if (this.props.isSignUp){
      name = this.name.value
    }
    let email = this.email.value
    let password = this.password.value
    let errors = this.validateInput(name, email, password)
    console.log("errors", errors);

    if (errors){
      this.handleError(errors)
    } else {
      this.props.onSubmit(name, email, password, this.handleError)
    }
  }
  validateInput = (name, email, password) => {
    let valid
    let errorDetector = ''
    if (name && name.length > 0){
      valid = validate({name: name}, validationRules.authNameCheck, {format: "flat"})
      errorDetector += valid ? (' ' + valid) : ''
    }
    if (email && email.length > 0){
      valid = validate({email: email}, validationRules.authEmailCheck, {format: "flat"})
      errorDetector += valid ? (' ' + valid) : ''
    }
    if (password && password.length > 0){
      valid = validate({password: password}, validationRules.authPasswordCheck, {format: "flat"})
      errorDetector += valid ? (' ' + valid) : ''
    }
    console.log("errorDetector", errorDetector)
    return errorDetector
  }

  render(){
    const error = this.state.error
    const isSignUp = this.props.isSignUp
    return (
      <div className="modal show modal-backdrop">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="text-center">{ isSignUp ? 'Sign up' : 'Login' }</h1>
            </div>
            <div className="modal-body">
              { error.length > 0 ? <div className="alert alert-danger fade in">{error}</div> :''}
              <form className="form col-md-12 center-block" onSubmit={this.handleSubmit}>
                { isSignUp ?
                  <div className="form-group">
                    <input
                      type="text"
                      id="auth-name"
                      className="form-control input-lg"
                      placeholder="username"
                      ref={node => this.name = node}
                    />
                  </div>
                  :
                  ''
                }
                <div className="form-group">
                  <input
                    type="email"
                    id="auth-email"
                    className="form-control input-lg"
                    placeholder="email"
                    ref={node => this.email = node}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="auth-password"
                    className="form-control input-lg"
                    placeholder="password"
                    ref={node => this.password = node}
                  />
                </div>
                <div className="form-group">
                  <input type="submit" id="auth-button" className="btn btn-lg btn-primary btn-block" value={ isSignUp ? 'Sign up' : 'Login' } />
                </div>
                <div className="form-group">
                  {
                    isSignUp ?
                      <p className="text-center">Already have an account? Login <Link to="/login">here</Link></p>
                    :
                    <p className="text-center">Don't have an account? Register <Link to="/signup">here</Link></p>
                  }
                </div>
              </form>
            </div>
            <div className="modal-footer" style={{borderTop: 0}}></div>
          </div>
        </div>
      </div>
    )
  }
}


AuthForm.PropTypes = {
  isSignUp: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default AuthForm
