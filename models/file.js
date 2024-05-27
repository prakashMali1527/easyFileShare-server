const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    uuid: {
        type: String,
        required: true
    },
    senderEmail: {
        type: String,
    },
    receiverEmail: {
        type: String,
    }
},{
    timestamps: true
});

const File = mongoose.model('File', fileSchema);

module.exports = File;