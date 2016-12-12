module.exports = (method, path, handler) => {
  this.routes[method][path] = handler;
}

module.exports("GET", "/", function(req, res) {
  res.end("Hello Elto, got: " + req.url);
});
