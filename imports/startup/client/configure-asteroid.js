import { createClass } from 'asteroid'

const Asteroid = createClass()
// Connect to a Meteor backend
const asteroid = new Asteroid({
  endpoint: 'https://contacts-meteor.herokuapp.com/websocket',
})
// endpoint: 'ws://contacts-meteor.herokuapp.com',
// endpoint: 'ws://localhost:3000/websocket',
export default asteroid
