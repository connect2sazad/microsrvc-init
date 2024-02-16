const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const port = 4005;

app.post('/events', async (req, res) => {
    const event = req.body;

    await axios.post('http://localhost:4000/events', event);
    await axios.post('http://localhost:4001/events', event);
    await axios.post('http://localhost:4002/events', event);
    
    res.send({ status: 'OK' });
});

app.listen(port, () => {
    console.log('Event Bus listening on '+port);
})