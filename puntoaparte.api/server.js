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
