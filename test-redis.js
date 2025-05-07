const Redis = require('ioredis');
require('dotenv').config();

const redis = new Redis(
    process.env.REDIS_URL
);

const testConnection = async () => {
    console.log('Inside test Connection');
    try {
        const value = await redis.get('test_key');
        await redis.quit();
    } catch (error) {
        console.error('Error connecting to REDIS DB:', error.message);
    }
};

testConnection();
