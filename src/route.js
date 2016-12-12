module.exports = (method, path, handler) => {
  module.exports.routes[method][path] = handler;
}

module.exports.routes = {
  GET: {

  },
  POST: {

  }
};

module.exports("GET", "/", function(req, res) {
  res.end("Hello Elto, got: " + req.url);
});
