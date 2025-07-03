const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const apiRouter = require('./routes/api');  
app.use('/api', apiRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});