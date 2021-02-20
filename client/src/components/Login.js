import React, { useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link} from "react-router-dom";
import fuse from '../fuse.svg';
import CardMedia from '@material-ui/core/CardMedia';
import { TextField } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({  
  root: {
    minWidth:300,
    textAlign:'center'
  },
  root1:{
      marginTop:150,
      marginLeft:150,
    },
  media: { 
    height:200,
    width:200
  }, 
  Typography:{
    marginTop:100,
    marginBottom:30,
  },
  Typography1:{
      color:'#fff'
  },
  Typography2:{
    marginTop:10,
    marginBottom:10

  },
  margin: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
    button:{
      backgroundColor:"#192d3e",
      color:"#fff",
      minWidth:200,
      marginTop:5,
      marginBottom:5
    },
    button1:{
      backgroundColor:"#61dafb",
      minWidth:200,
      marginTop:5,
      marginBottom:5
    }
}));

export default function Login() {
  const token=localStorage.getItem("token");
  let logedin=true;
  if(token==null){
      logedin=false;
      }
  const [logdin,setLogdin]=useState(logedin);
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
const handleSubmit = (e) => {
  e.preventDefault();
  async function fetchData() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({email,password}),
    };
  const response = await fetch('/login', requestOptions);
  const body = await response.json();
  alert(body.msg);
  localStorage.setItem("token","cthcghchjvyjfthdtdd");
  localStorage.setItem("userid",body.userid);
  localStorage.setItem("username",body.username);
  setLogdin(body.status);
  
  }  
    
    fetchData().
      catch((e)=>{
     alert("invalid email");
  }); 
}
  const handleChangeEmail = (event) => {
      setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
      setPassword(event.target.value);
    };
    const [state, setState] = React.useState({
      check:false
    });
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
    const { check} = state;
    
    if (logdin == true) {
      
      return <Redirect  to="/Homepage" />;
    }
const abcd=localStorage.getItem("username");
console.log(abcd);
  return (
  
      <Grid container    >
      
        <Grid container item xs={12} >
        
        <Grid item xs >
                <div className={classes.root1}>
                 <CardMedia
          className={classes.media}
          image={fuse}
          title="Contemplative Reptile"
        />
        <CardContent >
          <Typography gutterBottom className={classes.Typography1} variant="h2" component="h2">
            Welcome to the
            
          </Typography>
          <Typography gutterBottom  className={classes.Typography1} variant="h2" component="h2">
            
            FUSE React! 
          </Typography>
          <Typography gutterBottom  className={classes.Typography1} variant="h6" component="h2">
          
          Powerful and professional admin template for Web Applications, CRM, CMS, Admin Panels and more.
          </Typography>
        </CardContent>
      </div>
      
    </Grid>

    <Grid item xs={3} xl={2} lg={3} md={4} sm={12}>
      <Card  className={classes.root}>
        <CardContent>
            <Typography gutterBottom variant="h5"className={classes.Typography} component="h1">
               Login User
            </Typography>
              <form  onSubmit={handleSubmit} >
        <TextField
        required
        className={classes.margin}
          id="outlined-textarea"
          label="Email"
          
          value={email}
          onChange={handleChangeEmail}
          fullWidth
          variant="outlined"
        />
        <TextField
        className={classes.margin}
        required
          id="outlined-textarea"
          label="Password"
         
          value={password}
          onChange={handleChangePassword}
          fullWidth
          variant="outlined"
        />
        
      
      
        <FormGroup >
      
        <FormControlLabel
            
            control={<Checkbox checked={check}  color='primary' onChange={handleChange} name="check" />}
            label="Remember Me"
          />
      </FormGroup>
    
          <Button 
          type="submit"  
          className={classes.button} variant="contained" 
          disabled={!email} disabled= 
 {!password}
          >
        Login
      </Button>
      
      </form>

      <Typography className={classes.Typography2} >
      <Divider /> OR<Divider />
        </Typography>

        <Button 
          className={classes.button1} variant="contained" 
          >
        Login with Google
      </Button>
      <Button 
          className={classes.button} variant="contained" 
          >
        Login With Facebook
      </Button>
    
      <Typography className={classes.Typography2} >
      Create an account?
        </Typography>
    
          
      <Typography className={classes.Typography2} >
          <Link to="/Signup">
            Signup
          </Link>  
          </Typography>
          <Typography className={classes.Typography2} >
              OR
        </Typography>
           
        <Typography className={classes.Typography2} >
          <Link to="/">
             Home
          </Link>
        </Typography>
        </CardContent>
      
      
          </Card>
      
        </Grid>
          
        </Grid>
        
      </Grid>
 
  );
}