
/* global require, module */

var net = require('net');

function proxy (s, target) {
  var t = net.connect(target);

  s.pipe(t).pipe(s);
}

module.exports = proxy;
