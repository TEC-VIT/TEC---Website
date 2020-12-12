var express=require('express');
var app=express();
var mongoose=require("mongoose");
var Email =require("./models/mail")
var bodyParser=require("body-parser")
var mailgun=require("mailgun-js")
var cors = require('cors')



const mg = mailgun({apiKey:"049a56dd5235c7228e5b323a8cf8bd18-4879ff27-f80e21e1", domain:"sandboxe94042f75970470a96c52d8188ff47ab.mailgun.org"});

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}))
mongoose.connect("mongodb://localhost/dbforvisitors", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, });


/*
const sender_email="Aneesh <aneeshsarjit@gmail.com>"
const receiver_email="tec@vit.ac.in"
 const email_subject="Checking"
const email_body="Hello. Looks like you have heard from us." */
 
// MAILGUN FUNCTION 
sendMail=function(senderMail,receiverMail,subject,body){
    const data = { 
        "from": senderMail, 
        "to": receiverMail, 
        "subject": subject, 
        "text": body 
      }; 
      mg.messages().send(data, (error, body) => { 
        if(error) console.log(error) 
        else console.log(body); 
      }); 
    } 
       


//GET ROUTES
app.get("/",function(req,res){
        res.render("home.ejs")
})

//POST ROUTES
app.post("/adduser",function(req,res){
    console.log("reached here")
    var email=req.body.email;
    console.log(req.body.name,req.body.message,email)

    
    var name=req.body.name
    var message=req.body.message;

    const sender_email=email;
    const receiver_email ="aneeshsarjit@gmail.com";
    const email_subject=name;
    const email_body=message;


    var newEntry=new Email({
        emailadd:email
    })

    newEntry.save();
    console.log("New entry added")
    res.redirect("/")
     sendMail(sender_email, receiver_email, email_subject, email_body) 
})

app.listen(5000,function(){
    console.log("Server has started")
})