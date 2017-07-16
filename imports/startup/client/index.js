import React  from 'react'
import ReactDOM  from 'react-dom'
import routes from './components/routes'

// Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap-theme.min.css' // optional
// import 'jquery/dist/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'

Meteor.startup(()=> {
  ReactDOM.render(
    routes,
    document.getElementById('app')
  )
})
