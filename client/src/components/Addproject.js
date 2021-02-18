import React, { useState} from "react";
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link} from "react-router-dom";
import fuse from '../fuse.svg';
import CardMedia from '@material-ui/core/CardMedia';
import { TextField } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';

import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import {Redirect} from 'react-router-dom'

const themeLight = createMuiTheme({
    palette: {
      background: {
        default: "#aaaaaa"
      },
      
    }
  });

const useStyles = makeStyles((theme) => ({
  
  root: {
    marginTop:20,
    padding:20,
    textAlign:'center',
    
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
      backgroundColor:"#192d3e",
      color:"#fff",
      
      marginTop:30,
      marginBottom:5
    },
    
}));

export default function Addproject() {
    const [light,setLight]=useState(true)
  const classes = useStyles();
  const [title, setTitle] = React.useState('');
  const [discription, setDiscription] = React.useState('');
  const [fetchdata,setFetchdata]=React.useState('');
  const userid=localStorage.getItem("userid");
  const token=localStorage.getItem("token");
  let logedin=true;
  if(token==null){
      logedin=false;
      }
      const [logdin,setLogdin]=useState(logedin);
      
      

console.log(userid);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    async function fetchData() {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify({title,discription,userid}),
      };
    
    const response = await fetch('/postprojectdata', requestOptions);
    const body = await response.json();
    console.log(body);
    
    setFetchdata(body);
    
    }  
      
      fetchData().then(() => {
        alert("Data Added Successfully!!!");
    }).then(()=>{
        handleClose();
    }).
        catch((e)=>{
       alert("failed Try again");
    }); 
  }
  console.log(fetchdata);
    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
      };
      const handleChangeDiscription = (event) => {
        setDiscription(event.target.value);
      };
      const handleClose = () =>{
          setDiscription('');
          setTitle('');
      }
      if(logdin===false){
        return <Redirect to="/login"/>;
    }
  return (
    <ThemeProvider theme={light?themeLight:'' }>
    <CssBaseline />
      <div className={classes.root}>
    
    <Button variant="contained" className={classes.margin}  >
    <Link   to={{pathname:"/Homepage"}} >
        Go To Homepage
     </Link>                  
    </Button>

    <Grid container  direction="row" 
    justify="center" alignItems="flex-end"
      className={classes.root}>
      <Grid item  xs={4}  md={3} sm={5}>
        
          <Grid container  >
          <Card spacing={1} >
      
      <CardContent>
          <Typography gutterBottom variant="h5"className={classes.Typography} component="h1">
             Addproject
          </Typography>
            <form  onSubmit={handleSubmit} >
      <TextField
      required
      className={classes.margin}
        id="outlined-textarea"
        label="Project Title"
        value={title}
        onChange={handleChangeTitle}
        fullWidth
        variant="outlined"
      />
      <TextField
      className={classes.margin}
      required
        id="outlined-textarea"
        label="Discription"
        value={discription}
        onChange={handleChangeDiscription}
        fullWidth
        variant="outlined"
      />
      
    
    
      
        <Button 
        type="submit"  
        className={classes.button} variant="contained" 
        disabled={!title} disabled={!discription} 
        >
      Submit
    </Button>
    
    </form>

    
      </CardContent>
    
    
    </Card>
            
          </Grid>
        
      </Grid>
      <Grid item xs={12}>
        
      </Grid>
    </Grid>
    </div>
    </ThemeProvider>
  );
}