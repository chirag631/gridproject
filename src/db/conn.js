const mongoose = require("mongoose");

const URI="mongodb+srv://chirag:Chirag@7321@cluster0.sbwl0.mongodb.net/students?retryWrites=true&w=majority"
URI1="mongodb://localhost:27017/abcd"
mongoose.connect(process.env.URI||URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is successfull");
}).catch((e)=>{
    console.log(e,"not connected");
})