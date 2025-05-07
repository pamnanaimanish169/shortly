// constants
const express = require('express');
const cors = require('cors');
const Redis = require('ioredis');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

// Middleware
app.use(express.json()); // to start the application
app.use(cors()); // to prevent cors on frontend

// Port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Health Checkpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running ✅' });
});

// Test Redis Endpoint
const redis = new Redis(process.env.REDIS_URL);

app.get('/api/test-redis', async (req, res) => {
    // need to declare it here, otherwise it will give the following error:
    // [ioredis] Unhandled error event: Error: connect ECONNREFUSED 127.0.0.1:6379

    try {
        await redis.set('test', 'Redis is working!');
        const value = await redis.get('test');
        res.status(200).json({ message: value });
    } catch (error) {
        res.status(500).json({ error: 'Redis error', details: error.message });
    }
});
