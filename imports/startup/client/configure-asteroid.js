import { createClass } from 'asteroid'

const Asteroid = createClass()
// Connect to a Meteor backend
const asteroid = new Asteroid({
  endpoint: 'wss://contacts-meteor.herokuapp.com/websocket',
  // endpoint: 'ws://192.168.2.14:3000/websocket',
})

export default asteroid
