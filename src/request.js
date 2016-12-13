module.exports = (req) => {
  req.set = (header, val) => {
    req.headers[header] = val;
  }

  req.get = (header) => {
    return req.headers[header];
  }

  req.set("X-Powered-By", "Elto");
  
  return req;
};
