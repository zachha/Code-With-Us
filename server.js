const express     = require('express');
const path        = require('path');
const morgan      = require('morgan');
const bodyParser  = require('body-parser');
const db          = require('./models');
const routes      = require('./routes');
const passport    = require('passport');

require('dotenv').config();

const app         = express();

const PORT = process.env.PORT || 3001;

// initialize body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Add API routes
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(routes);

// syncs the database and starts the server
// FORCE TRUE IS ON DON'T FORGET TO TURN OFF
db.sequelize.sync({ force: false }).then(() => {
  require('./scripts/seedDB');
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});