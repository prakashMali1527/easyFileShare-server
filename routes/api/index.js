const router = require('express').Router();

router.use('/files', require('./files'));

module.exports = router;