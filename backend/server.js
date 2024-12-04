// backend/server.js
// eslint-disable-next-line no-undef
const express = require("express");
// eslint-disable-next-line no-undef
require("dotenv").config(); // Load environment variables
// eslint-disable-next-line no-undef
const nodemailer = require("nodemailer");
// eslint-disable-next-line no-undef
const cors = require("cors");
// eslint-disable-next-line no-undef
const bodyParser = require("body-parser");

const app = express();
// eslint-disable-next-line no-undef
const PORT = 3000; // You can choose another port if needed

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create a transporter object using SMTP transport (Gmail example)
const transporter = nodemailer.createTransport({
  service: "gmail", // Use other services like SendGrid or Mailgun if you prefer
  auth: {
    // eslint-disable-next-line no-undef
    user: process.env.EMAIL_USER, // Use environment variables for security
    // eslint-disable-next-line no-undef
    pass: process.env.EMAIL_PASS,
  },
});

// Define the route to handle the contact form submission
app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email, // The sender's email address
    to: "tanvi1693@gmail.com", // Replace with your own email address
    subject: `New message from ${name}`,
    text: `You received a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
