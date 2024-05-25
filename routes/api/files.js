const router = require('express').Router();

const filesController = require('../../controllers/api/files_controller'); 

router.post('/', filesController.handleUpload);

module.exports = router;