const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener for the 'greet' event
emitter.on('hello', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
emitter.emit('hello', 'Nithin');  
