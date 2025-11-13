import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
const app = express();
app.use(cors());
app.use(cors({
  origin: "https://vanshhingrajiya.vercel.app",
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port 5000 🚀"));