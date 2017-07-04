import React from 'react';

export default function Contact({ onClick, completed, name, phone }) {
  return (
    <li
      onClick={onClick}
      style={{textDecoration: completed ? 'line-through' : 'none'}}
    >
      {name} {phone}
    </li>
  );
}
