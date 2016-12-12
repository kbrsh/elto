var http = require("http");
var run = require("./src/run.js");
var get = require("./src/get.js");
var post = require("./src/post.js");
var missing = require("./src/missing.js");
var log = require("./src/log.js");

function Elto(opts) {
  if (!(this instanceof Elto)){
    return new Elto(opts);
  }
}

Elto.prototype.get = get;
Elto.prototype.post = post;
Elto.prototype.missing = missing;
Elto.prototype.run = run;


module.exports = Elto;
