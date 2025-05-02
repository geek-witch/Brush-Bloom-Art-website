// ... other requires
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const contactController = require('./controllers/contactController');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.post('/contact', contactController.handleContactForm);

// Start server and open browser
app.listen(port, () => {
    const url = `http://localhost:${port}/contact`;
    console.log(`Server running at ${url}`);

    // Fix: Import open dynamically
    (async () => {
        const open = (await import('open')).default;
        open(url);
    })();
});
