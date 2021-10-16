const express = require('express');
const cors = require('cors');
const questions = require('./questions/qapi');
const app = express();
const path = require('path');

const options = {
    methods:['GET','POST', 'PUT', 'DELETE'],
    credentials: true
};

const port = process.env.PORT || 8000;

app.use(cors(options));

app.use('/questions', questions);

app.use(express.static(__dirname + '/dist/wwtbam'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

app.listen(port, function() {
    console.log("Starting WHO WANTS TO BE A MILLIONAIRE: ANIME AND MANGA * EDITION");
});