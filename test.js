
var net = require('net');
var proxy = require('./index');
var should = require('should');

net.createServer(function (sock) {
  sock.on('data', function () {
    sock.write('proxied');
  });
}).listen(3001);

net.createServer(function (sock) {
  proxy(sock, { port: 3001 });
}).listen(3000);

var s = net.connect({ port: 3000 }, function () {
  s.write('test');
});

s.on('data', function (data) {
  data.toString().should.equal('proxied');

  process.exit(0);
});
