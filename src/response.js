var req = require("./request.js");
module.exports = (res) => {
  res.redirect = function(url) {
    res.writeHead(302, {'Location': url});
    res.end();
  }
  res.html = function(html) {
    res.set("Content-Type", "text/html");
    res.end(html);
  }
  return res;
};
