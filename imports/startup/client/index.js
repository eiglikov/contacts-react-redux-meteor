import React  from 'react'
import ReactDOM  from 'react-dom'
import routes from './components/routes'

Meteor.startup(()=> {
  ReactDOM.render(
    routes,
    document.getElementById('app')
  )
})
