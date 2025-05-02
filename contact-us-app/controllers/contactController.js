const emailService = require('../services/emailService'); // adjust path if needed
exports.handleContactForm = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        
        console.log('Form submission received:', { name, email, subject, message });

        if (!name || !email || !subject || !message) {
            console.log('Validation failed - missing fields');
            return res.status(400).send('All fields are required');
        }

        console.log('Attempting to send email...');
        await emailService.sendContactEmail({ name, email, subject, message });
        
        console.log('Email sent successfully');
        res.redirect('/contact?success=true');
    } catch (error) {
        console.error('Full error details:', {
            message: error.message,
            stack: error.stack,
            code: error.code,
            response: error.response
        });
        res.status(500).send('Error sending message');
    }
};