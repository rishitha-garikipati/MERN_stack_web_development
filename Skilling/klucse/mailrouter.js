const express = require("express");
const router = express.Router();
const nodeemailer = require("nodemailer")

//configuration smtp mail server
var otpStore='';
const transporter = nodeemailer.createTransport({
 host: "smtp.gmail.com",
 port: 587,
 secure: false,
 auth: {
    user:"rishitha.garikipati@gmail.com",
    pass:"uotu wpur lbuf jmmz",
 },
});

function generateOtp(){
    return Math.floor(10000 + Math.random() * 900000).toString();
}

router.post('/', async (req,res)=>{
    const email = req.body.email;
    const otp = generateOtp();
    otpStore=otp;
    console.log(otp);
    const mailOption = {
        from: "rishitha.garikipati@gmail.com",
        to: email,
        subject: "E-VISA OTP Verification",
        text: this is your OTP:${otp} for your Login purpose,
    }; 
    try {
        await transporter.sendMail(mailOption,(err,info)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(OTP email sent successfully to ${email});
        });
        res.status(200).json({
            message: OTP email sent successfully.,
        });
    } catch (err){
        console.error("Error sending OTP:",err);
        res.status(404).json({success: false,message: "error sending OTP"});
    }
});


module.exports = router;