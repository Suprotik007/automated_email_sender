

const express = require("express");
const dotenv=require('dotenv')
const cors = require("cors");
const nodemailer = require("nodemailer");
dotenv.config()
const app=express()
const port=process.env.PORT ||5000

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('kam koratse')
  
})
 

// email route
app.get('/send-email',async(req,res)=>{
    const paymentInfo={
        transactionId :'xxxyyyzzz',
        user: 'scpchy89@gmail.com'

    }

})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
    
})

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.email,
    pass: process.env.email_pass,
  },
});