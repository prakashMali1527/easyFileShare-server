const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const filePath = (path.join(__dirname,'../uploads/files/'));
        cb(null, filePath);
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    }
})

let upload = multer({
    storage: storage,
    limit: {
        fileSize: 1024 * 1024 * 100
        // 100MB file size
    }
}).single('myfile');

module.exports = upload;