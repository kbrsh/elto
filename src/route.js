module.exports = (method, path, handler) => {
  this.routes[method][path] = handler;
}

module.exports.routes = {
  GET: {

  },
  POST: {

  }
};
