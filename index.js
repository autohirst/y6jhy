const express = require('express');
const path = require('path');

const app = express();

// Serve the index.html file when the root URL is requested
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Add your other server logic here

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
