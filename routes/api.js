const express = require('express');
const router = express.Router();  

router.get('./routes/api', (req, res) => {
    res.send('API is working');
});

module.exports = router;