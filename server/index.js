const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const parser = require('body-parser');
const fs = require('fs');
const execSync = require('child_process').execSync;

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
  fs.writeFile('./server/toBuild/data.json', JSON.stringify(req.body), (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      res.status(201).send('success');
    }
  })
})

app.get('/portfolio/run-1', (req, res) => {
  console.log('1');
  execSync("npm run build-template", { "cwd": `${__dirname}`, "shell": "/bin/bash" }, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return res.status(500).send();
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
  })
  console.log('2');
  res.send('success');
});

app.get('/portfolio/run-2', (req, res) => {
  console.log('zipping!')
  execSync(`zip -r portfolio.zip ./dist/`, {
    'shell': "/bin/bash"
  });
  res.download('./portfolio.zip');
});

app.listen(1337, () => {
  console.log('server listening on port 1337')
})