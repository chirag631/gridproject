const mongoose = require("mongoose");
//const validator=require("validator");

const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    
    email:{
            type:String,
            required:true,
            
             
    },
    password:{
        type:String,
        required:true,
        
         
    },
    image:{
        type:String,
        required:false
    }
})

//create new collection

const Register = new mongoose.model('Register',employeeSchema);

module.exports = Register;