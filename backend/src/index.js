const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const server = express();

mongoose.connect('mongodb+srv://juniopereira:junio123@cluster0.ygj9i.mongodb.net/week8?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(express.json());
server.use(routes);

server.listen(3001);