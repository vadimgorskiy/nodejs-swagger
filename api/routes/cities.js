const express = require('express');
const citiesCtrl = require('../controllers/cities');

const router = express.Router();

router.get('/cities', citiesCtrl.getCities);
router.get('/cities/:id', citiesCtrl.getCityById);
router.post('/cities', citiesCtrl.createCity);
router.put('/cities/:id', citiesCtrl.updateCity);
router.delete('/cities/:id', citiesCtrl.deleteCity);

module.exports = router;
