var http = require('http'),
    faye = require('faye');

var server = http.createServer();
var bayeux = new faye.NodeAdapter({mount: '/faye', timeout: 5});

bayeux.attach(server);
server.listen(8001);
