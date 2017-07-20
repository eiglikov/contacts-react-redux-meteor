import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class AuthForm extends Component {
  constructor(props){
    super(props)
    this.state = { error: '' }
  }
  handleError = (err) => {
    this.setState({
      error: err
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let name = ''
    if (this.props.isSignUp){
      name = document.getElementById('auth-name').value
    }
    let email = document.getElementById('auth-email').value
    let password = document.getElementById('auth-password').value
    console.log("AuthForm", name, email, password);

    if (email && password){
      this.props.onSubmit(name, email, password, this.handleError)
    } else {
      this.handleError('Both email and password must be entered')
    }
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
                    <input type="text" id="auth-name" className="form-control input-lg" placeholder="name"/>
                  </div>
                  :
                  ''
                }
                <div className="form-group">
                  <input type="email" id="auth-email" className="form-control input-lg" placeholder="email"/>
                </div>
                <div className="form-group">
                  <input type="password" id="auth-password" className="form-control input-lg" placeholder="password"/>
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
