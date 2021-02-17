var express = require('express');

var path = require('path');
const Register=require("./src/models/registers");
const RegisterProject=require("./src/models/studentdetails");
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT  = process.env.PORT || 5000;

var app = express();
const bodyParser=require('body-parser');

const static_path=path.join(__dirname,"./client/build/index");
const uri='mongodb://localhost:27017/abcde'
const MONGODB_URI='mongodb+srv://chirag:Chirag@7321@cluster0.sbwl0.mongodb.net/chirag?retryWrites=true&w=majority';
mongoose.connect(process.env.MONGODB_URI || MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});


var cors=require('cors');


app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:false
}))
app.use(cors());

app.use((req,res,next)=>{
  console.log(`Request_Endpoint:${req.method} ${req.url}`);
  next();
});


app.get('/register',async(req,res)=>{
    
  Register.find()
  .then(result=>{
    res.status(200).json({
      studentData:result
    })
  })
.catch(err=>{
  console.log(err);
  res.status(500).json({
    error:err
  })
})
})

app.post("/post", async(req,res)=>{

    try{
      
            
            const registerEmployee = new Register({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
            });
            const registered= await registerEmployee.save();
            
            res.status(201).send(registered);
            console.log(registered);

    }catch(e){
        res.status(400).set(e);
    }
})

app.post("/postprojectdata", async(req,res)=>{

  try{
          const registerProjectData = new RegisterProject({
              
              title:req.body.title,
              discription:req.body.discription,
              userid:req.body.userid,
          });
          const registered= await registerProjectData.save();
          
          res.status(201).send(registered);
          console.log(registered);
  }catch(e){
      res.status(400).set(e);
  }
})

app.post('/getprojectdata',async(req,res)=>{
    const name=req.body.name;
    const username=await Register.findOne({name:name});
    
    const userid=username._id;


  RegisterProject.find({userid:userid})
  .then(result=>{
    res.status(200).json({
      studentData:result
    })
  })
.catch(err=>{
  console.log(err);
  res.status(500).json({
    error:err
  })
})
})

app.post("/login", async(req,res)=>{

  try{
    const email=req.body.email;
    const password=req.body.password;
    console.log(password)
    const useremail=await Register.findOne({email:email});
    console.log(useremail.password);
    const userid=useremail._id;
    const username=useremail.name;
    console.log(userid);

    if(useremail.password===password){
    
      res.status(201).json({msg:"User Login Successfuly",status:true,userid,username});
    }
    else{
      res.status(500).json({msg:"Invalid User",status:false});
    }
    
    
  }catch(e){
  
    res.status(400).send("invalid Email");
}
})

          
// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' ) {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
};


// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});





app.use(morgan('tiny'));

// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
};


app.listen(PORT,()=>{
  console.log("server running on "+ PORT)
})

//module.exports = app;
