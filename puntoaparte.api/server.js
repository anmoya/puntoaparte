const express = require('express');
const app = express();
const Database = require('./services/database');
const router = require('./routes/index');
const bodyParser = require('body-parser');
const Book = require('./models').Book;
const Author = require('./models').Author;


Author.create({
  firstName: 'Juan',
    lastName: 'Pozo',
    city: 'Santiago',
    birth: '1998',
    bio: 'asdf'
}).then( author => {
  author.createBook({
    title: 'Yellow Submarine',
    subtitle: 'The incredible adventures of yellow crew',
    abstract: 'This is a story, a novel, a bohemian rapsody about the crew who circunavegates de pacific.',
    price: '5999',
    year: '1998'
  }).then(() => console.log('Funcionó'));
});

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