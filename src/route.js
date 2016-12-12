module.exports = (method, path, handler) => {
  module.exports.routes[method][path] = handler;
}

module.exports.routes = {
  GET: {

  },
  POST: {

  },
  ERROR: {
    notFound: function(req, res) {
      res.status(404).end("404 Not Found");
    },
    serviceUnavailable: function(req, res) {
      res.status(503).end("503 Service Unavailable");
    }
  }
};
