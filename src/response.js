module.exports = (res) => {
  res.redirect = function(url) {
    res.writeHead(302, {'Location': url});
    res.end();
  }
  return res;
};
