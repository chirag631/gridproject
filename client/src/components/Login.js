import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Link } from 'react-router-dom';

const Login = () =>{


    return(
        
        <div class="mainpage">
        
        <h1>
            Login page
        </h1>
        <Typography >
      
      <Link to="/">
        Home
      </Link>
      </Typography>
        

        </div>
    )
}

export default Login;