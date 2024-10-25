const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({ message: 'hello world' });
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
