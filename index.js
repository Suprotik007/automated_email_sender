

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
  
const emailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
  
    user: process.env.email,
    pass: process.env.email_pass,
  },
});
 

// email route
app.get('/send-email',async(req,res)=>{
    const paymentInfo={
        transactionId :'xxxyyyzzz',
        user: 'scpchy89@gmail.com',
        parcelInfo :'5 kilograms of hazzlenuts',
        amount : '2 packs',


    }

    const emailObject={
        from: process.env.email,
        to:paymentInfo.user,
        subject:'xyzAgroLtd invoice ',
        html:`
        <p> Thank you for visiting us. We hope our product becomes the reason of your satisfaction' </p>
        <br/>
        <br/>
        <h3>Transaction Id : ${paymentInfo.transactionId}</h3>
        <h3>Parcel Info  : ${paymentInfo.parcelInfo}</h3>

        `
    }
    
    try{
        const emailInfo=await emailTransporter.sendMail(emailObject)
        console.log('email sent to',emailInfo.messageId);
        res.send({result:'successful'})
        
    }
    catch(err){
        console.log(err);
        res.send('failed email sending')
        
    }
})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
    
})

