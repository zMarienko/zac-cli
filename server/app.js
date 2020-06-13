"use strict";
const express = require('express');
const DB = require('./db');
const config = require('./config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const db = new DB("sqlitedb")
const app = express();
const router = express.Router();

var fs = require('fs');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
app.use(express.json({ limit: '50mb' }));

const allowCrossDomain = function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', '*');
   res.header('Access-Control-Allow-Headers', '*');
   next();
}

app.use(allowCrossDomain)

router.post('/login', (req, res) => {
   db.selectByEmail(req.body.email, (err, user) => {
      if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No user found.');
      let passwordIsValid = bcrypt.compareSync(req.body.password, user.user_pass);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
      let token = jwt.sign({ id: user.id }, config.secret, {
         expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token, user: user });
   });
})

router.post('/new-post', (req, res) => {
   var file = JSON.parse(fs.readFileSync('./server/posts.json', 'utf-8'))
   file.unshift(req.body);
   fs.writeFileSync('./server/posts.json', JSON.stringify(file));
})

app.use(router)

app.get('/posts', (req, res) => {
   res.send(fs.readFileSync('./server/posts.json', 'utf-8'));
});

app.get('/posts/:id', (req, res) => {
   const id = Number(req.params.id);
   var file = JSON.parse(fs.readFileSync('./server/posts.json', 'utf-8'))
   const post = file.find(post => post.id === id);
   res.json(post);
});

let port = process.env.PORT || 3000;

let server = app.listen(port, function () {
   console.log('Express server listening on port ' + port)
});