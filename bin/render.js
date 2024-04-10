var app = require('../app');
var http = require('http');

const port = (process.env.PORT || '8080');
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
console.log('Listening on port' + port)