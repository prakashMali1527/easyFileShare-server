const db = require('../config/mongoose');
const File = require('../models/file');
const fs = require('fs');

const deleteFile = async () => {
    let pastDate = new Date(Date.now() - 24 * 60 * 60 * 1000);
    let files = await File.find({ createdAt: { $lt: pastDate } });

    files.forEach( async (file) => {
        try {
            fs.unlinkSync(file.path);
            await File.deleteOne({uuid: file.uuid});
            console.log(`Successfully deleted file :- ${file.fileName}`);
        } catch (err) {
            console.log(`Error deleting file :- ${file.fileName}\n Error :- ${err}`);
        }
    });
}

deleteFile();
