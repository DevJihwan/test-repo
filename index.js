const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Simple route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the test-repo API!' });
});

// Sample routes
app.get('/api/items', (req, res) => {
  res.json([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});