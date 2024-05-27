const router = require('express').Router();

const filesController = require('../../controllers/api/files_controller'); 

router.post('/', filesController.handleUpload);

// handle email send route 
router.post('/send-email',filesController.sendEmail);

module.exports = router;