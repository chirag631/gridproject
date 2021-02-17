import React,{useState} from 'react';
import NestedGrid from './Gridpage';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import {Button, lighten} from '@material-ui/core'

const themeLight = createMuiTheme({
    palette: {
      background: {
        default: "#aaaaaa"
      }
    }
  });
  
  
  const useStyles = makeStyles((theme) => ({
  
    root: {
        textAlign:'center',
      },
      
  }));



const Logout = () =>{
const[light,setlight]=useState(true);
const classes=useStyles(); 
localStorage.removeItem("token");
localStorage.removeItem("userid");
localStorage.removeItem("username");
    return(
      <ThemeProvider theme={light?themeLight:'' }>
    <CssBaseline />
      <div className={classes.root}>
        <h1>Logout Successfully</h1>
        <Link to="/login">Login Again</Link>
        </div>
        </ThemeProvider>
    )
}

export default Logout;