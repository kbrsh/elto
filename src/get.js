var route = require("./route.js");
module.exports = (path, handler) => {
  route("GET", path, handler);
}
