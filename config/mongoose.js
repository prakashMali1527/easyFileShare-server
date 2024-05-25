require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION_URL);

const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

// on connecting
db.once('open', ()=>{
    console.log('Successfully connected to Database :: MongoDB');
});

module.exports = db;