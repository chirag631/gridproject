import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign:'center',
        color:'#ffffff',
        marginTop:5
      },
      margin:{
        margin:theme.spacing(2),
        minWidth:150,
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
                   <Button variant="contained" className={classes.margin}  >
                   <Link   to={{pathname:"/Updateprofile"}} >
                       Update Profile
                    </Link>                  
                   </Button>
                 <h1>
                    Welcome {username}
                  </h1>
        </div>
   
    )
}

export default Homepage;