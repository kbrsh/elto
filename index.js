var http = require("http");
var run = require("./src/run.js");
var route = require("./src/route.js");
var handle = require("./src/handle.js");
var log = require("./src/log.js");

function Elto(opts) {
  this.routes = {
    GET: {

    },
    POST: {

    }
  };
  if (!(this instanceof Elto)){
    return new Elto(opts);
  }
}

Elto.prototype.run = run;
Elto.prototype.route = route;
Elto.prototype.handle = handle;



module.exports = Elto;
