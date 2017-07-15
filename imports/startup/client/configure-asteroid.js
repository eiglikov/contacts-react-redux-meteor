import { createClass } from 'asteroid'

const Asteroid = createClass()
// Connect to a Meteor backend
const asteroid = new Asteroid({
  endpoint: 'ws://contacts-meteor.herokuapp.com/websocket',
})

export default asteroid
