var http = require("http");
module.exports = (port, ip) => {
  var server = http.createServer(function(req, res) {
    this.handle(req, res);
  });
  server.listen(port ? port : 3000, ip ? ip : "0.0.0.0");
}
