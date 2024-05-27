const upload = require('../../models/multer');
const File = require('../../models/file');
const { v4: uuid4 } = require('uuid');

module.exports.handleUpload = function (req, res) {
    // store file
    upload(req, res, async (err) => {

        if (err) {
            console.log('*****Multer error', err);
            return res.status(500).send('Server multer error');
        }

        // validate request
        if (!req.file) {
            return res.status().json({
                message: 'File cannot be empty'
            });
        }

        // store filepath to db
        const file = new File({
            fileName: req.file.filename,
            uuid: uuid4(),
            path: req.file.path,
            size: req.file.size,
        });

        const response = await file.save();

        // response -> link

        return res.status(200).json({
            file: `${process.env.APP_BASE_URL}/files/${response.uuid}`
        });
        // http://localhost:5500/files/9393fjifie-83939fiii
    })

}