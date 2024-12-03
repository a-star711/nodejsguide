const EventEmitter = require('events');
// Events are core building block of Node.js
const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id)=> {
  console.log(`Data recieved user: ${name} with id:${id}`)
})

customEmitter.on('response', ()=> {
  console.log(`some other logic here`)
})




customEmitter.emit('response', 'john', 36)
