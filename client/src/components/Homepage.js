import React, { useState } from 'react';
import NestedGrid from './Gridpage';
import Typography from '@material-ui/core/Typography';
import {Link, Redirect} from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Gridcard from './Gridcard';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import fuse from '../fuse.svg';
import CardMedia from '@material-ui/core/CardMedia';
import { TextField } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#aaaaaa"
    },
    
  }
});

const useStyles = makeStyles((theme) => ({
  
    root: {
        flexGrow: 1,
        width:'99%',
        textAlign:'center',
        marginTop:5
    
      },
      paper: {
        padding: theme.spacing(1),
        
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      margin:{
        margin:theme.spacing(2),
        minWidth:150,
      },
  }));

const Homepage = () =>{
const [light,setLight]=useState(true)
const classes=useStyles();
const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
    const token=localStorage.getItem("token");
    const username=localStorage.getItem("username");

    
    let logedin=true;
    if(token==null){
        logedin=false;
        }
        const [logdin,setLogdin]=useState(logedin);
        
        if(logdin===false){
            return <Redirect to="/login"/>;
        }
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
         

    return(
        <ThemeProvider theme={light?themeLight:'' }>
    <CssBaseline />
    <div className={classes.root} >
                 
                 <Button variant="contained" className={classes.margin}  >
                   <Link   to={{pathname:"/logout"}} >
                       Logout
                    </Link>                  
                   </Button>
                   <Button variant="contained" className={classes.margin}  >
                   <Link   to={{pathname:"/Addproject"}} >
                       Add Project
                    </Link>                  
                   </Button>
                    
                    
                 
                 <h1>
                    Welcome {username}
                  </h1>
              
        </div>
               
        
        
     
        </ThemeProvider>
    )
}

export default Homepage;