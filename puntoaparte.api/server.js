const express = require("express");
const app = express();
const router = require("./routes/index");
const bodyParser = require("body-parser");
const Database = require('./services/database');

// Including db conn in request
app.use((req, res, next) => {
  req.database = Database;
  return next();
});

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

Database.connect()
  .then(() => console.log("Connected!"))
  .catch(e => console.log(e));

Database.testConnection()
  .then(d => console.log(d))
  .catch(e => console.log(e));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", router);

app.listen(4200, () => console.log("Corriendo en 4200"));
