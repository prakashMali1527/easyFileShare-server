const nodeMailer = require('../config/nodemailer');

exports.mailFileLink = (file) => {
    let htmlString = nodeMailer.renderTemplate({
        senderEmail: file.senderEmail,
        downloadLink: `${process.env.APP_BASE_URL}/files/${file.uuid}`,
        size: `${parseInt(file.size/1000)} KB`,
        expires: '24 hours'
    }, '/emailFile.ejs');

    nodeMailer.transporter.sendMail({
        from: file.senderEmail,
        to: file.receiverEmail,
        subject: 'easyFileShare file sharing',
        text: `${file.senderMail} shared a file with you`,
        html: htmlString

    }, (err,info) => {
        if (err) {
            console.log('Error in sending file mail', err);
            return;
        }

        console.log('File mail sent');
    });
}