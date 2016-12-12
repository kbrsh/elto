var elto = require("../index.js");
var app = elto();

app.get("/", function(req, res) {
  res.end("Hello Elto, got: " + req.url);
});

app.run();
