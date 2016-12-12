var http = require("http");
module.exports = (port, ip) => {
  var server = http.createServer();
  server.listen(port ? port : 3000, ip ? ip : "0.0.0.0");
}
