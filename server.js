const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(__dirname + '/dist/team16_project1'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile('index.html');
 // res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 8080);
