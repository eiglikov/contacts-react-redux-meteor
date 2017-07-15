import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({history}) => (
  <div className='centered-container centered-text'>
    <h1><strong className='brand-text-color'>404</strong> Page Not Found</h1>
    <Link to='/'>
      <button className='btn btn-lg btn-primary'>Bring Me Home</button>
    </Link>
  </div>
)

export default NotFound;
