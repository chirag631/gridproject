const mongoose = require("mongoose");
//const validator=require("validator");

const employeeSchema=new mongoose.Schema({
      userid:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    discription:{
        type:String,
        required:true,
        
    },

})

//create new collection

const RegisterProject = new mongoose.model('RegisterProject',employeeSchema);

module.exports = RegisterProject;