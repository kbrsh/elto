module.exports = (req) => {
  req.set = (header, val) => {
    req.headers[header] = val;
  }

  req.get = (header) => {
    return req.headers[header];
  }
  return req;
};
