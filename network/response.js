success = (req, res, message, status = 200) => {
  res.status(status).send({
    items: message,
  });
};

error = (req, res, message, status = 500) => {
  res.status(status).send({
    error: message,
  });
};

module.exports = {
  success,
  error,
};

