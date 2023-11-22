const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route for the API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
