module.exports = (req, res) => {
  this.routes[req.method][req.url](req, res);
}
