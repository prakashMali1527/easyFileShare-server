const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();
const db = require('./config/mongoose');
const cors = require('cors');
require('dotenv').config();

// set ejs and views folder
app.set('view engine', 'ejs');
app.set('views', './views');

// set ejs and views folder
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./assets'));

// parse post data
app.use(express.urlencoded());
// parse json data
app.use(express.json());

// allow cross-origin-cors-policy
app.use(cors());

app.use('/', require('./routes/index'));

app.listen(PORT, (err) => {
    if(err){
        console.log(`Error in running server on PORT: ${PORT}`);
        return;
    }
    console.log(`Server is up and running on PORT: ${PORT}`);
});