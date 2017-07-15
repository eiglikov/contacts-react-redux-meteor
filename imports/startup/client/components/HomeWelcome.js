import React from 'react';

const HomeWelcome = ({history}) => {

  const linkToSignIn = () => {
    history.push('/login');
  }

  return(
    <div className='centered-container centered-text'>
      <h1 >Welcome to <strong className='brand-text-color'>Contacts</strong> Manager</h1>

      <h4>
        Web application to manage your contacts
      </h4>
      <a onClick={linkToSignIn}>
        <button className='btn btn-lg btn-primary'>Sign In</button>
      </a>
    </div>
  )
}

export default HomeWelcome;
