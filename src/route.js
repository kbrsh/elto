module.exports = (method, path, handler) => {
  this.routes[method.toLowerCase()][path] = handler;
}
