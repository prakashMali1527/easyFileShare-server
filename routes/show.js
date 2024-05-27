const router = require('express').Router();

const showController = require('../controllers/show_controller');

router.get('/:uuid', showController.downloadPage);

router.use('/download', require('./download'));

module.exports = router;