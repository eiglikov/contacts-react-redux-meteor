import React  from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import store from '../imports/startup/client/store/store';
import ContactsApp from '../imports/startup/client/components/ContactsApp';


Meteor.startup(()=> {
  ReactDOM.render(
    <Provider store={store}>
      <ContactsApp />
    </Provider>,
    document.getElementById('app')
  );
});
