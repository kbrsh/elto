var route = require("./route.js");
module.exports = (req, res) => {
  route.routes[req.method][req.url](req, res);
}
