import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import classnames from 'classnames'
import { Meteor } from 'meteor/meteor';

const AddContactForm = ({ dispatch }) => {
  let name;
  let phone;
  let imageUrl;
  const handleAddContactForm = () => {
    console.log(name.value, phone.value, imageUrl.value);

    console.log(Meteor.userId(), Meteor.user().username);


    dispatch(addTodo(name.value, phone.value, imageUrl.value));
    name.value = '';
    phone.value = '';
    imageUrl.value = '';
  }
  return (
    <div className={classnames('form-group', 'col-xs-12')}>
      <input
        className={classnames('form-control', 'col-xs-3')}
        type="text"
        placeholder='name'
        ref={node => {
          name = node;
        }}
      />
      <input
        className={classnames('form-control', 'col-xs-3')}
        type="text"
        placeholder='phone'
        ref={node => {
          phone = node;
        }}
      />
      <input
        className={classnames('form-control', 'col-xs-3')}
        type="text"
        placeholder='image url'
        ref={node => {
          imageUrl = node;
        }}
      />
      <button
        className={classnames('btn', 'btn-primary')}
        onClick={handleAddContactForm}>
        Add
      </button>
    </div>
  )
}

AddContactForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(AddContactForm)
