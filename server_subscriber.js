var faye = require('faye');

var sub = new faye.Client('http://localhost:8001/faye');


sub.subscribe('/messages', function(message){
  console.log('Message received: ' + message.text);

});
