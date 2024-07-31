const nodemailer = require("nodemailer");
require('dotenv').config()


const sendRequestEmail = async (req, res) => {
    const { message, phone, userId } = req.body;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Email options
    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'canarmeitar@gmail.com', // Replace with the employee's email
        subject: 'New Personal Request from User',
        text: `User ID: ${userId}\nPhone: ${phone}\nMessage: ${message}`,
    };

    // Send the email
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
};

module.exports.sendRequestEmail = sendRequestEmail;
