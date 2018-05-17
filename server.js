const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// requires models to sync database
const db = require("./models");
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;



// initialize body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Add API routes
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
/*
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
*/

// syncs the database and starts the server
db.sequelize.sync({ force: false }).then(() => {

  //require('./scripts/seedDB');
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});
