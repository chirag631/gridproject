//import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { TextField } from '@material-ui/core';
import { Alert } from 'react-alert'
import React, { useState} from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { lighten,createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { TableCell, TableHead } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import fuse from '../fuse.svg';
import Gridcard from './Gridcard';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';



const useStyles = makeStyles((theme) => ({
  root: {
    
    minHeight:'100%',
    
    
  },
  paper: {
    backgroundColor:  '#002884',
    minHeight:700,
    
    textAlign: 'center',
    width:'100%',
    minHeight:'100%',
    
    color: theme.palette.text.secondary,
  },
  root1: {
    
    minWidth:100,
    maxWidth:500,
    minHeight:400,
    
  },
  
  media: {
    height: 150,
    width:150,
    marginLeft:150,
    marginTop:40,
    marginBottom:40
  }, 
  Typography:{
    marginTop:100,
    marginBottom:30
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  root2: {
    display: 'flex',
    },
    root3: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    button:{
      marginTop:20,  marginBottom:20
    }
}
));

const Adduser = (props) => {
  
  
  
console.log(props);
  const classes = useStyles();
  const [user, setdata] = useState('');
  const [fetchdata,setFetchdata]=React.useState('');
    
  

  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  // getModalStyle is not a pure function, we roll the style only on the first render
  //const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
 

  
  

const handleSubmit = (e) => {
  e.preventDefault()
  console.log()
  async function fetchData() {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify({name,username,email})
      };
      const response = await fetch('/post', requestOptions);
   const body = await response.json();
   console.log(body);
   setFetchdata(body);
    }
    fetchData().then(() => {
      alert("User Added Successfully!!!");
  }).then(()=>{
    handleClose();
  }).catch((e)=>{
     alert(e);
  });
}

  const handleClose = () => {
    
    setName('');
    setUsername('');
    setEmail('')
      
  };
  const handleChangeName = (event) => {
      setName(event.target.value);
    };
    const handleChangeUsername = (event) => {
      setUsername(event.target.value);
    };
    const handleChangeEmail = (event) => {
      setEmail(event.target.value);
    };
    const [state, setState] = React.useState({
    check:false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { check} = state;
  
  
    function FormRow() {
      return (
        
        <React.Fragment>
         
          <Grid item xs={12}
             >
               </Grid>
               <Grid item xs={8}
             >
               </Grid>
            <Grid item xs={4}
             >
            <Card  className={classes.root1}>
      
        
        <CardContent>
        <Typography gutterBottom variant="h5"className={classes.Typography} component="h1">
               Create an account
          </Typography>
              <form>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Name*</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            labelWidth={60}
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Email*</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            labelWidth={60}
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Password*</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            labelWidth={60}
          />
          </FormControl>
          <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Password(Confirm)*</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            labelWidth={60}
          />
         
        </FormControl>
        <div className={classes.root2}>
        <FormGroup >
      
        <FormControlLabel
            
            control={<Checkbox checked={check}  color='primary' onChange={handleChange} name="check" />}
            label="I read and accept terms and conditions"
          />
      </FormGroup>
      </div>
        
          
          <Button clsaa={classes.button} variant="contained" color="primary">
        Create an account
      </Button>
      
      </form>
    Already have an account?
          
      <Typography className={classes.root3}>
      <Link to="/login">
        Login
      </Link>   or
      <Link to="/">
        Home
      </Link>
      </Typography>
        </CardContent>
      
      
    </Card>


              
          </Grid>
        
          
          
        </React.Fragment>
      );
    }

  return (
    
    <div className={classes.root}>
    
         
      <Grid container >
      <Paper className={classes.paper}>
      <Grid container item xs={12} >
      
          <FormRow /> 
                
      </Grid>
      </Paper>
    </Grid>
    
    </div>
  
  
  );
};



export default Adduser;