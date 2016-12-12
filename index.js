var http = require("http");
var run = require("./src/run.js");
var handle = require("./src/handle.js");

function Elto(opts) {
  this.routes = [];
  if (!(this instanceof Elto)){
    return new Elto(opts);
  }
}

Elto.prototype.handle = handle;
Elto.prototype.run = run;



module.exports = Elto;
