const express = require('express');
const gradient = require('gradient-string');
const path = require('path');
const app = express();
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
    accessToken: '87499faa46e94da3b6f6cb889ad0dc06',
    captureUncaught: true,
    captureUnhandledRejections: true,
})

app.use(express.json());


app.get('/', (req, res) => {
    rollbar.log('Hello world!')
    res.sendFile(path.join(__dirname, '/public/index.html'))
})



const port = process.env.PORT || 4545;
app.listen(port, () => {console.log(gradient.instagram(`Server jamming on ${port}`))}); 