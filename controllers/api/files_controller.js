const upload = require('../../models/multer');
const File = require('../../models/file');
const { v4: uuid4 } = require('uuid');

const emailFile = require('../../mailers/emailFile');

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

module.exports.sendEmail = async function(req,res){

    const {uuid, senderEmail, receiverEmail} = req.body;

    // validate request
    if(!uuid || !senderEmail || !receiverEmail){
        return res.status(422).send({error: 'All fields are required'});
    }

    try{
        let file = await File.findOne({uuid: uuid});

        if(file.senderEmail){
            return res.status(422).send({error: 'Email already sent'});
        }

        file.senderEmail = senderEmail;
        file.receiverEmail = receiverEmail;

        let newFile = await file.save();

        // send Email
        emailFile.mailFileLink(newFile);

        return res.status(200).send({success: 'Email Sent!!!'});
        
    }catch(err){
        return res.status(500).send({error: 'Server error in sending email'});
    }
    
}