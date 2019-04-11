const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: String,
  country: String,
  capital: Boolean,
  location: {
    lat: Number,
    long: Number
  },
  lastModifiedDate: Date
}, {
  collection: 'cities',
  timestamps: {
    createdAt: 'lastModifiedDate',
    updatedAt: 'lastModifiedDate'
  }
});

module.exports = mongoose.model('City', citySchema);
