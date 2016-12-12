module.exports = (method, path, handler) => {
  module.exports.routes[method][path] = handler;
}

module.exports.routes = {
  GET: {

  },
  POST: {

  }
};
