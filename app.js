const SwaggerExpress = require('swagger-express-mw');
const express = require('express');
const models = require('./api/models');
const cities = require('./api/routes/cities');

const app = express();
const config = {
  appRoot: __dirname // required config
};
const port = process.env.PORT || 10010;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'origin, content-type, accept');

  next();
});
app.use(express.json());
app.use('/api', cities);

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  models.connect()
    .then(() => app.listen(port, () => console.log(`App listening on port ${port}!`)))
    .catch((err) => console.error('Unable to connect to the database:', err));
});

module.exports = app; // for testing
