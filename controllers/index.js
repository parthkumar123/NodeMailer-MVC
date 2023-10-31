"user strict";
const nodemailer = require('nodemailer');
// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service provider
    auth: {
        user: process.env.EMAIL_ADDRESS, // Your email address
        pass: process.env.EMAIL_PASSWORD // Your email password or application-specific password
    }
});

// Handle user login
async function handleSendEmail(req, res) {
    try {
        // Check if email, subject and body are provided
        const body = req.body;
        if (!body.to || !body.subject || !body.text) {
            return res.status(400).json({
                message: 'Email address, subject and text are required.'
            });
        }

        // Email data
        const mailOptions = {
            from: process.env.EMAIL_ADDRESS, // Sender's email address
            to: body.to, // Recipient's email address
            subject: body.subject, // Subject line
            text: body.text // Plain text email content
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            // Handle errors
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).json({
                    message: error.message
                });
            } else {
                // Email sent successfully
                console.log('Email sent:', info.response);
                res.status(200).json({
                    message: 'Email sent!'
                });
            }
        });
    } catch (error) {
        // Handle errors
        return res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    handleSendEmail,
}