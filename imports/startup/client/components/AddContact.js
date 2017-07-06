import React from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions/actions';


function AddContact({ dispatch }) {
  let name;
  let phone;
  return (
    <div>
      <input ref={function (node)  {
        name = node;
      }}/>
      <input ref={function (node)  {
        phone = node;
      }}/>
      <button onClick={function () {
        dispatch(addContact(name.value, phone.value));
        name.value = '';
        phone.value = '';

      }}>
        Add Contact
      </button>

    </div>
  );
}

export default connect()(AddContact);
