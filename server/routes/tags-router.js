const express = require('express');

const TagsCtrl = require('../controllers/tags-ctrl');

const router = express.Router();

router.get('/', TagsCtrl.ping);
router.get('/tags', TagsCtrl.getTags);

module.exports = router;
