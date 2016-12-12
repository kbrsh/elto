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
      res.end("404 Not Found");
    },
    serviceUnavailable: function(req, res) {
      res.end("503 Service Unavailable");
    }
  }
};
