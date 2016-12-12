var http = require("http");
var run = require("./src/run.js");
var server = require("./src/server.js");

function Elto(opts) {
  this.routes = [];
  if (!(this instanceof Elto)){
    return new Elto(opts);
  }
}

Elto.prototype.run = run;



module.exports = Elto;
