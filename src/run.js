var http = require("http");
var handle = require("./src/handle.js");
module.exports = (port, ip) => {
  var server = http.createServer(function(req, res) {
    handle(req, res);
  });
  server.listen(port ? port : 3000, ip ? ip : "0.0.0.0");
}
