var route = require("./route.js");
module.exports = (req, res) => {
  if(!route.routes[req.method][req.url]) {
    route.routes.ERROR.notFound(req, res);
  } else {
    route.routes[req.method][req.url](req, res);
  }
}
