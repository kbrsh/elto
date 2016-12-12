module.exports = (res) => {
  res.set = (header, val) => {
    res.setHeader(header, val);
  }

  res.get = (header) => {
    return res.getHeader(header);
  }

  res.redirect = function(url) {
    res.writeHead(302, {'Location': url});
    res.end();
  }

  res.html = function(html) {
    res.set("Content-Type", "text/html");
    res.end(html);
  }

  res.json = function(json) {
    res.set("Content-Type", "application/json");
    res.end(JSON.stringify(json));
  }

  return res;
};
