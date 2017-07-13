import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import classnames from 'classnames'
import { Meteor } from 'meteor/meteor';

const AddContactForm = ({ dispatch }) => {
  let name;
  let phone;
  let imageUrl;
  let email;

  const handleAddContactForm = () => {
    console.log(name.value, phone.value, email.value, imageUrl.value);
    dispatch(addTodo(name.value, phone.value, email.value, imageUrl.value));
    handleClearForm();
  }
  const handleClearForm = () => {
    name.value = '';
    phone.value = '';
    imageUrl.value = '';
    email.value = '';

  }
  return (
    <div className='row'>
      <div className={classnames('form-group')}>

        <div className="form-group input-group input-group-unstyled">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-user"></i>
          </span>
          <input
            className={classnames('form-control')}
            type="text"
            placeholder='name'
            ref={node => {
              name = node;
            }}
          />
        </div>

        <div className="form-group input-group input-group-unstyled">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-phone"></i>
          </span>
          <input
            className={classnames('form-control')}
            type="text"
            placeholder='phone'
            ref={node => {
              phone = node;
            }}
          />
        </div>

        <div className="form-group input-group input-group-unstyled">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-envelope"></i>
          </span>
          <input
            className={classnames('form-control')}
            type="text"
            placeholder='email'
            ref={node => {
              email = node;
            }}
          />
        </div>

        <div className="form-group input-group input-group-unstyled">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-picture"></i>
          </span>
          <input
            className={classnames('form-control')}
            type="text"
            placeholder='image url'
            ref={node => {
              imageUrl = node;
            }}
          />
        </div>

        <div className='btn-toolbar pull-right'>

          <button
            className={classnames('btn', 'btn-default')}
            onClick={handleClearForm}>
            CANCEL
          </button>
          <button
            className={classnames('btn', 'btn-primary')}
            onClick={handleAddContactForm}>
            SUBMIT
          </button>
        </div>

      </div>
    </div>
  )
}

AddContactForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(AddContactForm)
