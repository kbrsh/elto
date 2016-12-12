var route = require("./route.js");
module.exports = (handler) => {
  route.routes.ERROR.notFound = handler;
}
