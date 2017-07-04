import React  from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
// import store from '../../imports/client/store/store';


function ContactsAppRoot() {
  return (
    <div>
      <Provider>
        <h1>Hello There!</h1>
      </Provider>
    </div>
  );
}

Meteor.startup(()=> {
  ReactDOM.render(
    <ContactsAppRoot />,
    document.getElementById('app')
  );
});
