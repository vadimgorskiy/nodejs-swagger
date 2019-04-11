const mongoose = require('mongoose');
const City = require('./city');
const config = require('../../config');

module.exports = {
  City,
  connect () {
    return mongoose.connect(config.url, { useNewUrlParser: true });
  },
};
