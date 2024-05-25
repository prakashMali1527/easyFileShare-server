const express = require('express');
const app = express();

const PORT = process.env.PORT || 5500;

app.listen(PORT, (err) => {
    if(err){
        console.log(`Error in running server on PORT: ${PORT}`);
        return;
    }
    console.log(`Server is up and running on PORT: ${PORT}`);
});