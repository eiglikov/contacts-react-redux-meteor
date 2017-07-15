import React from 'react';
import PropTypes from 'prop-types';
import { Bert } from 'meteor/themeteorchef:bert';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import GroupSelector from './GroupSelector';

const AddContactForm = ({ dispatch }) => {
  let name;
  let phone;
  let imageUrl;
  let email;
  let group = 'all';

  const handleAddContactForm = () => {
    if (!name.value.length && !phone.value.length && !email.value.length){
      console.log("Fields cannot be empty");
      Bert.alert("Fields cannot be empty", 'danger');
    } else {
      console.log(name.value, phone.value, email.value, chooseImage(imageUrl), group);
      dispatch(addTodo(name.value, phone.value, email.value, chooseImage(imageUrl), group));
      handleClearForm();
    }
  }
  const chooseImage = (imageUrl) => {
    if (imageUrl.value === '')
      //default image placeholder
      return 'https://trendytheme.net/wp-content/themes/trendytheme/img/client.png';
     else
      return imageUrl.value;
  }
  const handleClearForm = () => {
    name.value = '';
    phone.value = '';
    imageUrl.value = '';
    email.value = '';

  }
  const handleSelect = (selected) => {
    console.log('group', selected);
    group = selected;
  }

  return (
    <div className='row'>
      <div className='form-group'>

        <div className="form-group input-group input-group-unstyled">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-user"></i>
          </span>
          <input
            className='form-control'
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
            className='form-control'
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
            className='form-control'
            type="text"
            placeholder='email'
            ref={node => {
              email = node;
            }}
          />
        </div>

        <div className="form-group input-group input-group-unstyled">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-envelope"></i>
          </span>
          <input
            className='form-control'
            type="text"
            placeholder='image url'
            ref={node => {
              imageUrl = node;
            }}
          />
        </div>

        <GroupSelector onSelect={handleSelect}/>


        <div className='btn-toolbar pull-right'>
          <button
            className='btn btn-default'
            onClick={handleClearForm}>
            CANCEL
          </button>
          <button
            className='btn btn-primary'
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
