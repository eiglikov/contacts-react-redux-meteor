import React from 'react';

function Contact({ onClick, completed, name, phone }) {
  return (
    <li
      style={{textDecoration: completed ? 'line-through' : 'none'}}
    >
      {name} {phone}
      <button className="remove-comment"
        onClick={onClick}>
        &times;
      </button>
    </li>
    );
  }

  export default Contact;
