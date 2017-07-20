import { createClass } from 'asteroid'

const Asteroid = createClass()
// Connect to a Meteor backend
const asteroid = new Asteroid({
  // endpoint: 'ws://192.168.2.14:3000/websocket',
  endpoint: 'wss://contacts-meteor.herokuapp.com/websocket',
})
export default asteroid
