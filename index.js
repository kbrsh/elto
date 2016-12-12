var http = require("http");
var run = require("./src/run.js");
var get = require("./src/get.js");
var log = require("./src/log.js");

function Elto(opts) {
  if (!(this instanceof Elto)){
    return new Elto(opts);
  }
}

Elto.prototype.run = run;


module.exports = Elto;
