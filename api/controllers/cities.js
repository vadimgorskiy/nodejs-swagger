const models = require('../models');
const responses = require('../responses');
const City = require('../../entities/city');

const getCities = (req, res) => {
  models.City.find()
    .then((cities) => responses.success(res, {cities}))
    .catch((err) => responses.error(res, err));
};

const getCityById = (req, res) => {
  models.City.findById(req.params.id)
    .then((city) => {
      if (city) {
        responses.success(res, {city});
      } else {
        responses.notFound(res, 'City not found');
      }
    })
    .catch((err) => responses.error(res, err));
};

const createCity = (req, res) => {
  new models.City(new City(req.body)).save()
    .then((newCity) => responses.success(res, {city: newCity}))
    .catch((err) => responses.error(res, err));
};

const updateCity = (req, res) => {
  models.City.findByIdAndUpdate(req.params.id, new City(req.body), {new: true, upsert: true})
    .then((city) => responses.success(res, {city}))
    .catch((err) => responses.error(res, err));
};

const deleteCity = (req, res) => {
  models.City.findOneAndRemove(req.params.id)
    .then((city) => responses.success(res, {city}))
    .catch((err) => responses.error(res, err));
};



module.exports = {
  getCities,
  getCityById,
  createCity,
  updateCity,
  deleteCity,
};
