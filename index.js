// Import the express module
const express = require('express');

// Create an instance of the Express app
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  try {
    // Send the response with the text "Express App"
    console.log('Request received at root URL');
    res.send('Express App');
  } catch (error) {
    console.error('Error occurred while handling request:', error.message);
    console.error('Error stack:', error.stack);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  try {
    console.log(`Server started on port ${port}`);
  } catch (error) {
    console.error('Error occurred while starting server:', error.message);
    console.error('Error stack:', error.stack);
  }
});