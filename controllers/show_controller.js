const File = require('../models/file');
require('dotenv').config();

module.exports.downloadPage = async function(req,res){

    try{
        let file = await File.findOne({uuid: req.params.uuid});

        if(!file){
            console.log('No such file exist');
            return res.render('download', {error: 'Link expired'});
        }

        return res.render('download',{
            uuid: file.uuid,
            fileName: file.filename,
            fileSize: file.size,
            downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
        });

    }catch(err){
        return res.render('download', {error: 'something went wrong!!!'});
    }
    
}
const File = require('../models/file');
require('dotenv').config();

module.exports.downloadPage = async function(req,res){

    try{
        let file = await File.findOne({uuid: req.params.uuid});

        if(!file){
            console.log('No such file exist');
            return res.render('download', {error: 'Link expired'});
        }

        return res.render('download',{
            uuid: file.uuid,
            fileName: file.fileName,
            fileSize: file.size,
            downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
        });

    }catch(err){
        return res.render('download', {error: 'something went wrong!!!'});
    }
    
}