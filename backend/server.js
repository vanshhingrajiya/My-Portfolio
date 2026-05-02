import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import transporter from './config/emailConfig.js';
import getEmailTemplate from './templates/emailTemplates.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(cors({
  origin: process.env.FRONTEND_URL || "https://vanshhingrajiya.vercel.app",
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(express.json());

app.post("/send-mail", async (req, res) => {
    const {name, email, message} = req.body;
    try{
        const transporter = nodemailer.createTransport({
            service : "gmail",
            auth: {
                user : process.env.EMAIL_USER,
                pass : process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER || "im0000474747@gmail.com",
            subject: `New message from ${name}`,
            text: ` 
                Name : ${name}
                Email : ${email}
                Message : ${message}
            `,
        });

        res.status(200).json({success : true});
    }catch(err){
        console.log(err);
        res.status(500).json({success : false});    
    }
});

app.post("/print-ease/send-mail", async (req, res) => {
    try {
    const { email, otp, purpose } = req.body;

    // Validate required parameters
    if (!email || !otp || !purpose) {
      return res.status(400).json({
        success: false,
        message: 'Missing required parameters: email, otp, and purpose are required',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format',
      });
    }

    // Validate purpose
    const validPurposes = ['mobile_login', 'password_reset', 'mobile_register', 'email_verification'];
    if (!validPurposes.includes(purpose)) {
      return res.status(400).json({
        success: false,
        message: `Invalid purpose. Valid purposes are: ${validPurposes.join(', ')}`,
      });
    }

    // Validate OTP (should be numeric and 4-6 digits)
    if (!/^\d{4,6}$/.test(otp)) {
      return res.status(400).json({
        success: false,
        message: 'OTP must be a 4-6 digit number',
      });
    }

    // Get email template
    const template = getEmailTemplate(purpose, otp);

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: template.subject,
      html: template.html,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    res.status(200).json({
      success: true,
      message: 'OTP sent successfully to your email',
      messageId: info.messageId,
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port 5000 🚀"));