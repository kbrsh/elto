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
      res.status(404);
      res.end("404 Not Found");
    },
    serviceUnavailable: function(req, res) {
      res.status(503);
      res.end("503 Service Unavailable");
    }
  }
};
