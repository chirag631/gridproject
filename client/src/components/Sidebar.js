import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {Link, Redirect} from 'react-router-dom'
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
  const Sidebar = () =>{
    const classes=useStyles();    

    return(
      <div>
        <Paper >
      <MenuList>
        
        <MenuItem>
        <Link  className={classes.color} to={{pathname:"/Addproject"}} >
                       Add Project
                    </Link>  
        </MenuItem>
        <MenuItem>
        <Link className={classes.color}  to={{pathname:"/Updateprofile"}} >
                       Update Profile
                    </Link>   
        </MenuItem>
        <MenuItem>
        <Link className={classes.color}  to={{pathname:"/Viewproject"}} >
                       View Projects
                    </Link>  
        </MenuItem>
        <MenuItem>
        <Link className={classes.color}  to={{pathname:"/logout"}} >
                       Logout
                    </Link>  
        </MenuItem>
      </MenuList>
    </Paper>
   </div>
    )
}

export default Sidebar;


