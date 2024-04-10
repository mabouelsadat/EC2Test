const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Route to fetch IP info
app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://ipinfo.io/ip');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching IP info:', error);
        res.status(500).json({ error: 'Failed to fetch IP info' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
