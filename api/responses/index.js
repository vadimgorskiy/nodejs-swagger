const error = (res, err) => {
  res.status(500).json({
    error: err
  });
};

const success = (res, data) => {
  res.status(200).json(data);
};

const notFound = (res, message) => {
  res.status(404).json({
    message
  });
};


module.exports = {
  error,
  success,
  notFound,
};
