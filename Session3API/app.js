const express = require('express');
const app = express();

const router = require('./router');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', router);

const port = process.env.port || 5000;

app.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Database connected successfully' });
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})