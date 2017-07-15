import { createClass } from 'asteroid'

const Asteroid = createClass()
// Connect to a Meteor backend
const asteroid = new Asteroid({
  endpoint: 'ws://localhost:3000/websocket',
})
// endpoint: 'wss://contacts-meteor.herokuapp.com',
// endpoint: 'ws://localhost:3000/websocket',
export default asteroid
