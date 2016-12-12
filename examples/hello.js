var elto = require("../index.js");
var app = elto();

app.get("/", function(req, res) {
  res.end("Hello Elto, got: " + req.url + "\n Headers: " + JSON.stringify(req.headers));
});

app.get("/redirect", function(req, res) {
  res.redirect("http://example.com");
});

app.run();
