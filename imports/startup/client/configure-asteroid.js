import { createClass } from 'asteroid'
import ip from 'ip'

console.log("LOCAL IP", ip.address());
let address
if (ip.address() == '127.0.0.1')
  address = `ws://${ip.address()}:3000`
else
  address = `wss://${ip.address()}`

const Asteroid = createClass()
// Connect to a Meteor backend
const asteroid = new Asteroid({
  endpoint: `${address}/websocket`,
})
// endpoint: 'wss://contacts-meteor.herokuapp.com/websocket',
// endpoint: 'ws://192.168.2.14:3000/websocket',
export default asteroid
