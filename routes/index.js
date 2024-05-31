const router = require('express').Router();

router.get('/', function (req, res) {
    return res.send('<h4>fileShare API testing :- <strong>Success! </strong> </h4>');
})
router.use('/api', require('./api/index'));
router.use('/files', require('./show'));

module.exports = router;