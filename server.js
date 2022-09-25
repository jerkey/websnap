const express = require('express');
const multer = require('multer');
const upload = multer();
const fs = require('fs');

var app = express();
app.use(express.static(__dirname)); // dirname is this file's location

var savePath = '' // where to save files if not specified
const myArgs = process.argv.slice(); // https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
if (myArgs[2]) { // if a parameter is specified (0 and 1 are node and this file)
  savePath = myArgs[2]; // use specified path
  console.log('savePath: ', myArgs[2]);
  if (savePath.slice(-1) != '/') console.log('savePath doesn\'t end in a slash, are you sure you want that?')
}

app.post('/uploadpic', upload.any(), (req, res) => {
  console.log('POST /uploadpic/');
  console.log('originalname: ', req.files[0].originalname, 'size: ', req.files[0].size);
  var filenameToWrite = savePath + req.files[0].originalname.replace(/\//g, 'slash') // replace any slashes in filename with "slash"
  fs.writeFile(filenameToWrite, req.files[0].buffer, (err) => {
    if (err) {
      console.log('Error: ', err);
      res.status(500).send('An error occurred: ' + err.message);
    } else {
      res.status(200).send('ok');
    }
  });
});

app.listen(process.env.PORT || 8081);
