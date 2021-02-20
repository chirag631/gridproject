import React, { useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from 'axios';
const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#192d3e"
    }
  }
});



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
    
}));



export default function Signup() {
  const classes = useStyles();
  const [username, setUserName] = useState('');
  const [fetchdata,setFetchdata]=React.useState('');
  const [filename, setFilename] = useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const handleSubmit = (e) => {
  
  e.preventDefault();
  const formData = new FormData();
  formData.append('name',name)
  formData.append('username',username);
  formData.append('email',email);
  formData.append('password', 'password');
  formData.append('confirmPassword',confirmPassword)
  formData.append('profileImage', filename);
  
  if(password!=confirmPassword){
    alert("password not match with confirmpassword")
  }else if(check==false){
    alert('plese accept term and condition');
  }else{  

axios.post('/post',formData ,).then(res=>{
  const message=res.data.message;
  console.log(message)
} 
).then(()=>{
  handleClose();
})
.catch(err=>console.log(err));

  }
}
console.log(fetchdata);
  const handleClose = () => {
    alert("User Added Successfully!!!");
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setState(false)
      
  };
const uid=localStorage.getItem("uid");
console.log(uid);
const onChange = e => {
  setFilename(e.target.files[0]);
  setName(e.target.files[0].name)
};
  const handleChangeName = (event) => {
      setUserName(event.target.value);
    };
  const handleChangeEmail = (event) => {
      setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
      setPassword(event.target.value);
    };
    const handleChangeConfirmPassword = (event) => {
      setConfirmPassword(event.target.value);
    };
    

    const [state, setState] = React.useState({
      check:false
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
    const { check} = state;

  return (
    <Grid container  item xs={12}>
 <Grid  item xs  
             >
                <div className={classes.root1} >
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

    <Grid item xs={3} xl={2} lg={3} md={4} sm={12} >
    
      <Card  className={classes.root}>
      
        <CardContent>
            <Typography gutterBottom variant="h5"className={classes.Typography} component="h1">
               Create an account
            </Typography>
              <form  onSubmit={handleSubmit} encType="multipart/form-data">
        
      <TextField
          className={classes.margin}
          required
          id="outlined-textarea"
          label="Name"
          value={username}
          onChange={handleChangeName}
          fullWidth
          variant="outlined"
        />
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
        <TextField
        required
        className={classes.margin}
          id="outlined-textarea"
          label="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          
          fullWidth
          variant="outlined"
        />
      
      <div>
      <input
            type='file'
            filename="profileImage"
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            
          </label>
          </div>
        <FormGroup >
      
        <FormControlLabel
            
            control={<Checkbox checked={check}  color='primary' onChange={handleChange} name="check" />}
            label="I read and accept terms and conditions"
          />
      </FormGroup>
    
          <Button 
          type="submit"  
          className={classes.button} variant="contained" 
          disabled={!name} disabled= {!email}
          disabled={!password} disabled= {!confirmPassword} 
          
          >
        Create an account
      </Button>
      
      </form>
    
    Already have an account?
          
    <Typography className={classes.Typography2} >
          <Link to="/login">
            Login
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
  );
}