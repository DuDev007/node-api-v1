var express = require('express');
var router = express.Router();

router.use('/items',require('./items'));
router.use('/careers',require('./careers'));

module.exports = router;
