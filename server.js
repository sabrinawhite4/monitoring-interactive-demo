const express = require('express');
const gradient = require('gradient-string');
const path = require('path');
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})



const port = process.env.PORT || 4545;
app.listen(port, () => {console.log(gradient.instagram(`Server jamming on ${port}`))});