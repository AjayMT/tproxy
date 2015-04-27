
# tproxy
Super simple tcp proxy.

```javascript
var net = require('net');
var proxy = require('tproxy');

net.createServer(function (sock) {
  sock.on('data', function () {
    sock.write('proxied\r\n');
  });
}).listen(3001);

net.createServer(function (sock) {
  proxy(sock, { port: 3001 });
}).listen(3000);

var s = net.connect({ port: 3000 }, function () {
  s.write('test');
});

s.on('data', console.log);

// will output 'proxied'
```

## Installation
```sh
$ npm install tproxy --save
```

## API
### tproxy(sock, target)
Proxy between `sock` and `target`.

## License
MIT License (see `./LICENSE`).

## TODO
- tests
