var elto = require("../index.js");
var app = elto();

app.get("/", function(req, res) {
  res.end("Hello Elto, got: " + req.url + "\n Headers: " + JSON.stringify(req.headers));
});

app.get("/html", function(req, res) {
  res.html("<h1>Hello Elto!</h1><br/><p>This is an HTML Page</p>");
});

app.get("/json", function(req, res) {
  res.json({
    hello: "Elto",
    arr: ["This", "Is", "JSON"]
  });
});

app.get("/redirect", function(req, res) {
  res.redirect("http://example.com");
});

app.run();
