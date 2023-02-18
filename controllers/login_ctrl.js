const PortalSchema = require("../models/signup_model");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
  
const login=async(req,res)=>{
    try{
        const {username,password}=req.body;
        let user=await PortalSchema.findOne({username:username});
        bcrypt.compare(req.body.password,user.password,function(err,result){
            if(result===true){
                let token=jwt.sign({
                    username:user.username,id:user._id},
                    process.env.SECRETKEY);
                    res.json({message:"Loged In",
                            token});
                }
                else{
                    res.json({
                        message: "login in Error",
                        // error: err.message
                    });
                }
        });

    } 
    catch(err){
        res.json({
            message: err.message,
          });
      
    }
};
module.exports=login;