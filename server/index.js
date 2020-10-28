const axios = require('axios');
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(fileUpload());

app.use(express.static('../build'));

app.post('/upload/profile', (req, res) => {
  console.log(req)
  if (!req.files) {
    return res.status(500).send({ msg: 'no file attached!' });
  }
  const file = req.files.file;
  file.mv(`${__dirname}/toBuild/profile${file.name.slice(file.name.indexOf('.'))}`, function (err) {
    if (err) {
      console.log(err)
      return res.status(500).send({ msg: "Error occured" });
    }
    return res.send({ name: file.name, path: `/${file.name}` });
  })
});

app.post('/upload/project/:id', (req, res) => {
  // console.log(req.params)
  if (!req.files) {
    return res.status(500).send({ msg: 'no file attached!' });
  }
  const file = req.files.file;
  file.mv(`${__dirname}/toBuild/project${req.params.id}${file.name.slice(file.name.indexOf('.'))}`, function (err) {
    if (err) {
      console.log(err)
      return res.status(500).send({ msg: "Error occured" });
    }
    return res.send({ name: file.name, path: `/${file.name}` });
  })
});

app.post('/upload/portfolio', (req, res) => {
  if (!req.files) {
    return res.status(500).send({ msg: 'no file attached!' });
  }
  const file = req.files.file;
  file.mv(`${__dirname}/toBuild/data.js`, function (err) {
    if (err) {
      console.log(err)
      return res.status(500).send({ msg: "Error occured" });
    }
    return res.send({ name: file.name, path: `/${file.name}` });
  })
})

app.listen(1337, () => {
  console.log('server listening on port 1337')
})