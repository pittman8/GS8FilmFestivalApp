const mongoose = require('mongoose');

var admin = 'dbAdmin';
var pass = 'gs8dev';
var cluster = 'gs8data';
var collection = 'gs8db';
var url =
    'mongodb+srv://' +
    admin +
    ':' +
    pass +
    '@' +
    cluster +
    '-epfuq.azure.mongodb.net/' +
    collection +
    '?retryWrites=true&w=majority';

const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10,
    useNewUrlParser: true
};

mongoose.connect(url, options).then(
    () => {
        console.log('##Database connection established!');
    },
    err => {
        console.log('##Error connecting Database instance due to: ', err);
    }
);

const db = mongoose.connection;

module.exports = db;
