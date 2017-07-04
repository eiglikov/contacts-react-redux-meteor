import React from 'react';
import { connect } from 'react-redux';
import {addContact} from '../actions/addContact';


function AddContact({ dispatch }) {
  let name;
  let phone;
  return (
    <div>
      <input ref={function (node)  {
        name = node.value;
      }}/>
      <input ref={function (node)  {
        phone = node.value;
      }}/>
      <button onClick={function () {
        dispatch(addContact(name, phone));
        name = '';
        phone = '';

      }}>
        Add Contact
      </button>

    </div>
  );
}

export default connect()(AddContact);
