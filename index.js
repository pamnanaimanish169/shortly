const express = require('express')
const cors = require('cors')
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json()); // to start the application
app.use(cors()) // to prevent cors on frontend

// Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})


// Health Checkpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running ✅' })
})