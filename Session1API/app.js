const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require('./router');

app.use('/api', router);

const port = 5000 || process.env.port;

app.get('/', (req, res) => {
    res.json({ status: 200, msg: 'Database connected successfully' });
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});