
# tproxy
Super simple tcp proxy.

```javascript
var net = require('net');
var proxy = require('tproxy');

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
  console.log(data.toString());
});

// will output 'proxied'
```

## Installation
```sh
$ npm install tproxy --save
```

## API
### tproxy(sock, target)
Make a proxy between `sock` and `target`. This function returns an instance of `net.Socket`, which is the socket connected to `target`.

`target` is what you'd normally call `net.connect` with.

## License
MIT License (see `./LICENSE`).

## TODO
- tests
