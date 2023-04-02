const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname));

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);

console.log('Running at port 3000');
