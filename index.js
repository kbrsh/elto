var http = require("http");
var run = require("./src/run.js");
var log = require("./src/log.js");

function Elto(opts) {
  this.routes = {};
  if (!(this instanceof Elto)){
    return new Elto(opts);
  }
}

Elto.prototype.run = run;



module.exports = Elto;
