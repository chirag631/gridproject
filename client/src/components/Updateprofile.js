import React, { useState,useEffect} from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Link} from "react-router-dom";
import { TextField } from '@material-ui/core';
import {Redirect} from 'react-router-dom'
import axios from 'axios';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#192d3e',
      contrastText: '#fff',
    },
    
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:20,
    
    textAlign:'center',
  },
  
  media: { 
    borderRadius: '5%',
      height:400,
      
      
      
  }, 
  Typography:{
    marginTop:50,
    marginBottom:30,
  }, 
  margin: {
      marginRight: theme.spacing(1),
     marginBottom:theme.spacing(1),
  },
    button:{
      marginTop:30,
      marginBottom:5
    }, 
}));

export default function Updateprofile() {
    const [data1,setdata]=useState([]);
    const [img,setImg]=useState('');
  const classes = useStyles();
  
  const [username, setUserName] = useState('');
  const [filename, setFilename] = useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const userid=localStorage.getItem("userid");
  const token=localStorage.getItem("token");
  let logedin=true;
  if(token==null){
      logedin=false;
      }
      const [logdin,setLogdin]=useState(logedin);
console.log(userid);
const onChange = e => {
  setFilename(e.target.files[0]);
  setName(e.target.files[0].name)
};

  useEffect(() => {
    
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const res= await fetch("/getuser/"+userid,
    );
    const body=await res.json();
    setUserName(body.studentData[0].name)
    setImg(body.studentData[0].image);
    setEmail(body.studentData[0].email)
    setPassword(body.studentData[0].password)
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('articalImage',filename)
    formData.append('name', name);
    formData.append('username',username)
    formData.append('email',email)
    formData.append('password',password)
    formData.append('userid', userid);
    
    console.log(formData);
    
    axios.post("/updateprofile",formData,{headers: {
      "content-type": 'multipart/form-data',
    },},
  ).then(res=>{
    const message=res.data.message;
    alert(message);
    console.log(message)
  } 
  ).then(()=>{
    handleClose();
  })
  .catch((err)=>{
    alert(err)
    console.log(err)
  });
 
  }
  
  const handleChangeName = (event) => {
    setUserName(event.target.value);
  };
const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  
  const handleClose = () => {
    loadUsers();  
  };
      if(logdin===false){
        return <Redirect to="/login"/>;
    }
  return (
      <div className={classes.root}>   
    <Button variant="contained" className={classes.margin}  >
    <Link   to={{pathname:"/Homepage"}} >
        Go To Homepage
     </Link>                  
    </Button>

    <Grid container  
    justify="center" 
      className={classes.root}>
      <Grid item justify='center'  xl={3} lg={4} xs={10} md={6} sm={8}>
      
      <Card  >
     
      <CardContent >
      <CardMedia
      
            className={classes.media} justify='center'
            image={`/users/${img}`}
            title="Contemplative Reptile"
            />
          <Typography gutterBottom variant="h5"className={classes.Typography} component="h1">
             Update Profile
          </Typography>

          
            <form  onSubmit={handleSubmit} >
              
                    <TextField
                className={classes.margin}
                
                id="outlined-textarea"
                label="Name"
                value={username}
                onChange={handleChangeName}
                fullWidth
                variant="outlined"
                />
                <TextField
                
                className={classes.margin}
                id="outlined-textarea"
                label="Email"
                type="email"
                value={email}
                onChange={handleChangeEmail}
                fullWidth
                variant="outlined"
                />
                <TextField
                className={classes.margin}
                id="outlined-textarea"
                label="Password"
                name="password"
                value={password}
                onChange={handleChangePassword}
                fullWidth
                variant="outlined"
                />
             
                <TextField
                id="outlined-required"
                helperText="Change User Image"
                className={classes.margin}
                
                type="file"
                fullWidth
                filename="articalImage"
                
                onChange={onChange}
                variant="outlined"
                />
              <ThemeProvider theme={theme}>
                <Button 
                type="submit"  color="primary"
                className={classes.button} variant="contained" 
                >
              Submit
            </Button>
            </ThemeProvider>
          </form>
      </CardContent>
      </Card>
      
      </Grid>
      
    </Grid>
    </div>
    
  );
}