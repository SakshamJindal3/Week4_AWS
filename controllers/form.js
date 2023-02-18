
const FromSchema = require("../model/form");
const mongoose = require("mongoose");

  
const awsConfig ={
    accessKeyId : "AKIATLGYA7EVOWLZTCWT",
    secretAccessKey : "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",
    region : "ap-northeast-1"
  }

const createForm = async (req, res) => {
    try
    {   
        const{Class,Name,Branch,email}=req.body
        const createForm = new FormSchema({FromID:req.id,Class,Name,Branch,email});
        let responce = await createFrom.save();

        const params = {
            Source:email,
            Destination:{
              ToAddresses:[email],
          },
          Message:{
              Subject:{
                Data:"Welcome to INZINT",
              },
              Body:{
                Html: {
                 Charset:"UTF-8",
                  Data:`<h1>Hi ${Name} your branch:${branch} and class is ${Class}.</h1>`
                },
              },
            },
          };
          const emailSent= await SES.sendEmail(params).promise()
          .then(data =>{
            data.MessageId
          })
          .catch(err =>{
            err.message
          })


        res.json({message:"Hurry! Form Submitted",responce});
    }            
    catch(err){
        res.json({
        message: "Error in Uploading Form"
        });
    };
}
module.exports=createForm;


