import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data'
import { signIn } from '../actions'

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    // const { props: { signIn } } = this
    // console.log(this);

    this.props.dispatch(signIn(email, password, this.props.history));
    // asteroid.loginWithPassword({email:email,password: password})

    // Meteor.loginWithPassword(email, password, (err) => {
    //   if(err){
    //     this.setState({
    //       error: err.reason
    //     });
    //   } else {
    //     this.props.history.push('/');
    //   }
    // });

  }
  linkToSignUp = () => {
    this.props.history.push('/signup')
  }

  render(){
    const error = this.state.error;
    return (
      <div className="modal show">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="modal-body">
              { error.length > 0 ? <div className="alert alert-danger fade in">{error}</div> :''}
              <form id="login-form" className="form col-md-12 center-block" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="email" id="login-email" className="form-control input-lg" placeholder="email"/>
                </div>
                <div className="form-group">
                  <input type="password" id="login-password" className="form-control input-lg" placeholder="password"/>
                </div>
                <div className="form-group text-center">
                  <input type="submit" id="login-button" className="btn btn-primary btn-lg btn-block" value="Login" />
                </div>
                <div className="form-group text-center">
                  <p className="text-center">Don't have an account? Register <a href="#" onClick={this.linkToSignUp}>here</a></p>
                </div>
              </form>
            </div>
            <div className="modal-footer" style={{borderTop: 0}}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(LoginPage);
