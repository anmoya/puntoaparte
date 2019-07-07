const express = require('express');
const app = express();
const Database = require('./services/database');
const router = require('./routes/index');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',router);


Database.connect()
  .then(() => console.log('Connected!'))
  .catch(e => console.log(e));

Database.testConnection()
  .then(d => console.log(d))
  .catch(e => console.log(e));

app.get('/', async (req, res) => {
    res.json(await Database.queryDB('SELECT * FROM "Books"'));
});

app.listen(4200, () => console.log('Corriendo en 4200'));