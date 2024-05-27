const router = require('express').Router();

router.use('/api', require('./api/index'));
router.use('/files', require('./show'));

module.exports = router;