var faye = require('faye');

var client = new faye.Client('http://localhost:8001/faye');

var pub = client.publish('/messages', {text: 'Hello'});

pub.callback(process.exit);
