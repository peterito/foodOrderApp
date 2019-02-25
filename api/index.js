import bodyParser from 'body-parser';

import express from 'express';


const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send('The API is working');
});


app.listen(PORT, () => {
    console.log('server is running on PORT ' + PORT);
});