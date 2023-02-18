const mongoose=require("mongoose");
mongoose.set('strictQuery', false);

const From = new mongoose.Schema({

    Class:{
        required : true,
        type : "String"
    },
    Name:{
        required : true,
        type : "String"
    },
    Branch:{
        required : true,
        type : "String"
    }
    ,
    email:{
        required : true,
        type : "String"
    }
    
});

const Form_ = mongoose.model("portal", Form);

module.exports = Form_;