import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Navbaruser from './Navbaruser';
import Sidebar from './Sidebar';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign:'center',
        color:'#ffffff',
        marginTop:20
      },
      margin:{
        margin:theme.spacing(0),
        minWidth:150,
      },
      color:{
        color:"#000",
      },
  }));

  const Homepage = () =>{
    const classes=useStyles();
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
        
        

    return(
      <div>
        <Navbaruser />
    <div className={classes.root} >  
    <Grid container color="primary" justify="center" direction="row">
      <Grid xs={12} container Items justify="flex-start" >
        <Grid xs={3} Items>
          <Sidebar />
                
                   </Grid>
                   <Grid xs Items>
                   <h1>
                    Welcome {username}
                  </h1>
                   </Grid>
                   </Grid>
                   </Grid>
                 
        </div>
   </div>
    )
}

export default Homepage;