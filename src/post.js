var route = require("./route.js");
module.exports = (path, handler) => {
  route("POST", path, handler);
}
