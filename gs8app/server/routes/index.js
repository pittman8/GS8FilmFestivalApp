const express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res) => {
    'use strict';
    res.render('index', { title: 'server' });
});

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);

module.exports = router;