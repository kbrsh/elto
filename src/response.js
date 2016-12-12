module.exports = (res) => {
  res.redirect = function(url) {
    response.writeHead(302, {'Location': url});
    response.end();
  }
  return res;
};
