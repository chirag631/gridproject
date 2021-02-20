const mongoose = require("mongoose");


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
    image:{
        type:String,
        required:false
    }
    
    

})

//create new collection

const RegisterProject = new mongoose.model('RegisterProject',employeeSchema);

module.exports = RegisterProject;