const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

express.static(path.resolve('/public'));

app.listen(port, ()=>{
    console.log(`Server running on port:${port}`);
})


app.get('/', (req, res)=>{
    res.sendFile(path.resolve('/public/views/index.html'));
})