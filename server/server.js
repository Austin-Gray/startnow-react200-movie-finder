require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/movie/:movieSearch', (req, res) => {
    axios({
        url: `http://www.omdbapi.com/?s=${req.params.movieSearch}&apikey=${process.env.API_KEY}`,
        method: 'get',
    })
    .then(response => {
        res.status(200).send(response.data);
    })
});

app.get('/movieDetail/:id', (req, res) => {
    axios({
        url: `http://www.omdbapi.com/?i=${req.params.id}&apikey=${process.env.API_KEY}`,
        method: 'get',
    })
    .then(response => {
        res.status(200).send(response.data);
    })
})

module.exports = app;
