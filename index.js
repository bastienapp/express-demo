const express = require('express');

const app = express();

const characters = [
  {
    id: 125,
    name: 'Scoobert "Scooby" Doo',
    type: 'dog',
  },
  {
    id: 484,
    name: 'Daphne Blake',
    type: 'human',
  },
  {
    id: 12,
    name: 'Shaggy Rogers',
    type: 'human',
  },
];

app.get('/characters', (request, response) => {
  const { type } = request.query;
  let result = characters;
  if (type) {
    result = characters
      .filter((character) => character.type === type);
  }
  response.status(200).json(result);
});

app.get('/characters/:id', (request, response) => {
  const { id } = request.params;

  const result = characters
    .find((character) => character.id === parseInt(id));

  if (result === undefined) {
    response.sendStatus(404);
  } else {
    response.status(200).json(result);
  }
});

// à la fin
app.listen(8080, function () {
  console.log('Listen port 8080');
});
