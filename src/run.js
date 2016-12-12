var http = require("http");
var log = require("./log.js");
module.exports = (port, ip) => {
  log("======= Elto =======", "blue");
  var server = http.createServer(function(req, res) {
    handle(req, res);
  });
  server.listen(port ? port : 3000, ip ? ip : "0.0.0.0");
}
