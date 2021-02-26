import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
const useStyles = makeStyles((theme) => ({
    root: {
        textAlign:'center',
        color:'#ffffff',
      },
  }));
const Logout = () =>{
const classes=useStyles(); 
localStorage.removeItem("token");
localStorage.removeItem("userid");
localStorage.removeItem("username");
    return(
      <div>
      <Navbar/>
       <div className={classes.root}>
        <h1>Logout Successfully</h1>
        <Button variant="contained" className={classes.margin}  >
            <Link  to="/login">Login Again</Link>                    
        </Button>
      </div> 
      </div>
    )
}
export default Logout;