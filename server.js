const express = require('express');
const multer = require('multer');
const upload = multer();
const fs = require('fs');

var app = express();
app.use(express.static(__dirname)); // dirname is this programs location

app.post('/uploadpic', upload.any(), (req, res) => {
    console.log('POST /uploadpic/');
    console.log('Files: ', req.files);
    fs.writeFile(req.files[0].originalname, req.files[0].buffer, (err) => {
        if (err) {
            console.log('Error: ', err);
            res.status(500).send('An error occurred: ' + err.message);
        } else {
            res.status(200).send('ok');
        }
    });
});

app.listen(process.env.PORT || 8081);
