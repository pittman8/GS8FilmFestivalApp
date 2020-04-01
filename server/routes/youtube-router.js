const express = require('express');

const YoutubeCtrl = require('../controllers/youtube-ctrl');

const router = express.Router();

//router.get('/', TagsCtrl.ping);
//router.get('/tags', TagsCtrl.getTags);
router.get('/', YoutubeCtrl.ping);
//router.get('/tags', YoutubeCtrl.getTags);

module.exports = router;