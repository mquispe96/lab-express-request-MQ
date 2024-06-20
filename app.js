const express = require('express');
const cors = require('cors');
const pokemon = require('./models/pokemon.json');

const app = express();
app.use(cors());

app.get('/', (req, res) => res.send('Welcome 99 Pokemon'));

//Poke-Express
app.get('/pokemon', (req, res) => res.send(pokemon));
app.get('/pokemon/search', (req, res) => {
  const {name} = req.query;
  const index = pokemon.findIndex(pok => pok.name.toLowerCase() === name.toLowerCase());
  if(index > -1){
    res.send([pokemon[index]]);
  }
  else{
    res.send([]);
  }
})
app.get('/pokemon/:pokemonAtIndex', (req, res) => {
  const {pokemonAtIndex} = req.params;
  const index = Number(pokemonAtIndex);
  if (pokemon[index]) {
    res.send(pokemon[index]);
  } else {
    // res.status(404).json({
    //   error: 'Not Found',
    //   message: `No pokemon exists at index: ${index}`,
    // });
    res.send(`Sorry, no pokemon found at ${index}`)
  }
});

//99 Little Bugs In the Code
app.get('/bugs', (req, res) =>
  res.send(
    "<body><p>99 little bugs in the code</p><br /><a style='text-decoration: none;' href='/bugs/101'>Pull one down, patch it around</a></body>",
  ),
);
app.get('/bugs/:numOfBugs', (req, res) => {
  const {numOfBugs} = req.params;
  if (numOfBugs >= 200) {
    res.send(
      "<body><p><a style='text-decoration: none;' href='/bugs'>Too many bugs!! Start over!</a></body>",
    );
  } else {
    res.send(
      `<body><p>${numOfBugs} little bugs in the code</p><br /><a style='text-decoration: none;' href=\'/bugs/${Number(numOfBugs) + 2}\'>Pull one down, patch it around</a></body>`,
    );
  }
});

//New Project Name Generator
app.get('/:verb/:adjective/:noun', (req, res) => {
  const {verb, adjective, noun} = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`,
  );
});

module.exports = app;
