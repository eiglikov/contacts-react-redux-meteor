import React  from 'react';
import ReactDOM  from 'react-dom';
import routes from './components/routes';
import '../both/accounts-config.js';

// Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap-theme.min.css' // optional
// import 'jquery/dist/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'

Meteor.startup(()=> {
  ReactDOM.render(
    routes,
    document.getElementById('app')
  );
});
