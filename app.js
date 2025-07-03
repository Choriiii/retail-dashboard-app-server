const express = require('express');
const apiRoutes = require('./routes/api');

const app = express();

app.use(apiRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
