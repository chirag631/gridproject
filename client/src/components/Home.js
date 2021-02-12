import React from 'react';
import NestedGrid from './Gridpage';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//import '../MainStyle.css';
//import Gridcard from './Gridcard';
const useStyles = makeStyles((theme) => ({
    
    root:{
        textAlign:'center'
    }
    
   
  }));

const Home = () =>{

    const classes = useStyles();
    return(
        
        <div className={classes.root}>
        
        <Typography gutterBottom   variant="h2" component="h2">
            
            FUSE React! 
          </Typography>
        <NestedGrid />

        </div>
    )
}

export default Home;