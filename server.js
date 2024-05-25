const express = require('express');
const app = express();
const db = require('./config/mongoose');
const cors = require('cors');

// allow cross-origin-cors-policy
app.use(cors({
    origin: 'http://127.0.0.1:5500',
}));

app.use('/', require('./routes/index'));
const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if(err){
        console.log(`Error in running server on PORT: ${PORT}`);
        return;
    }
    console.log(`Server is up and running on PORT: ${PORT}`);
});