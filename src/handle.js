var route = require("./route.js");
module.exports = (req, res) => {
  var handler = route.routes[req.method][req.url];
  if(!handler) {
    route.routes.ERROR.notFound(req, res);
  } else if(handler) {
    handler(req, res);
  } else {
    route.routes.ERROR.serviceUnavailable(req, res);
  }
}
