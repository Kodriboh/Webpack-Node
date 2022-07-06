import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Node!')
});

app.listen(3000);