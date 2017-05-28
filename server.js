/**
 * Created by kashetws on 06/05/17.
 */

const express = require('express');
const path = require('path');

const app = express();

// Point static path to dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('**', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 5000!')
});
