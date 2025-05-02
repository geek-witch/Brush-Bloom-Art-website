const nodemailer = require('nodemailer');

// Gmail-compatible transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    logger: true // Enable built-in logging
});

// Connection test on startup
transporter.verify((error) => {
    if (error) {
        console.error('SMTP Connection Failed:', {
            code: error.code,
            command: error.command,
            response: error.response
        });
    } else {
        console.log('SMTP Connection Verified');
    }
});

// Email sending function
exports.sendContactEmail = async (data) => {
    try {
        const mailOptions = {
            from: `"Brush & Bloom Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.CONTACT_EMAIL,
            subject: `New Contact: ${data.subject.substring(0, 50)}`,
            text: `From: ${data.name} <${data.email}>\n\n${data.message}`,
            html: `<div style="font-family: Arial, sans-serif">
                <h3 style="color: #2c3e50;">New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                <p><strong>Subject:</strong> ${data.subject}</p>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 5px;">
                    ${data.message.replace(/\n/g, '<br>')}
                </div>
            </div>`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email successfully sent:', info.messageId);
        return info;
    } catch (error) {
        console.error('Full Email Error:', {
            code: error.code,
            responseCode: error.responseCode,
            command: error.command,
            response: error.response
        });
        throw new Error(`Email failed: ${error.response}`);
    }
};
