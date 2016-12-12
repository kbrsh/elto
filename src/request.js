module.exports = (req) => {
  req.set = (header, val) => {
    req.headers[header] = val;
  }
  return req;
};
