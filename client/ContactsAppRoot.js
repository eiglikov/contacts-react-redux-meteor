import React  from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import store from '../imports/startup/client/store/store';
import ContactsApp from '../imports/startup/client/components/ContactsApp';

function ContactsAppRoot() {
  return (
    <div>
      <Provider store={store}>
        <ContactsApp />
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
