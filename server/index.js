const axios = require('axios');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('../portfoliobuilder/build'));

app.listen(1337, () => {
  console.log('server listening on port 1337')
})