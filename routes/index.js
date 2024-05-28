const router = require('express').Router();

router.get('/', function (req, res) {
    return res.send('<h1>Welcome to easyFileSharing</h1>');
})
router.use('/api', require('./api/index'));
router.use('/files', require('./show'));

module.exports = router;