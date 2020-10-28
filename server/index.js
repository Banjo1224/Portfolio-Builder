const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const parser = require('body-parser');
const fs = require('fs');
const { exec } = require("child_process");
var AdmZip = require('adm-zip');

const zip = new AdmZip();
const app = express();

app.use(cors());
app.use(fileUpload());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

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

app.post('/portfolio', (req, res) => {
  fs.writeFile('./server/toBuild/data.txt', JSON.stringify(req.body), (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      Promise.resolve(exec("npm run build-template", { "cwd": `${__dirname}`, "shell": "/bin/bash" }, (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      }))
      .then(() => {
        Promise.resolve(exec("zip -r portfolio.zip ../dist/", {"cwd": `${__dirname}`, "shell": "/bin/bash" }, (err, stdout, stderr) => {
          if (err) {
            console.log(`error: ${err.message}`);
            return;
          }
          if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
        }))
      })
      .catch(err => console.log(err));
      res.status(201).send('success');
    }
  })
})

app.listen(1337, () => {
  console.log('server listening on port 1337')
})