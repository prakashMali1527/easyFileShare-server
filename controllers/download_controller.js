const File = require('../models/file');

module.exports.download = async function(req,res){

    try{
        let file = await File.findOne({uuid: req.params.uuid});

        if(!file){
            return res.render('download', {error: 'Link has expired'});
        }

        let filePath = path.join(__dirname,'..',file.path);
        return res.download(filePath);

    }catch(err){
        return res.render('download', {error: 'Something went wrong!!!'});
    }
}