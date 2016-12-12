var http = require("http");
var run = require("./src/run.js");

function Elto() {
  this.routes = [];
}

Elto.prototype.run = run;



module.exports = Elto;
