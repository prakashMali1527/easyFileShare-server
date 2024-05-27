const router = require('express').Router();

const downloadController = require('../controllers/download_controller');

router.get('/:uuid',downloadController.download);

module.exports = router;