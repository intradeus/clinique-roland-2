const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();
var DIST_DIR = path.join(__dirname, "dist");

app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

app.listen(port);