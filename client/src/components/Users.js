import React, { useState} from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { lighten, makeStyles } from '@material-ui/core/styles';
import { TableCell, TableHead } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    container: {
      maxHeight: 260,
      
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }));

const User = (props) => {
  
  const {_id}=useLocation();
  
console.log(props);
  const classes = useStyles();
  const [user, setdata] = useState('');
  
  React.useEffect(() => {
    const loadUsers = async () => {
      const res= await fetch("/register");
      const body=await res.json();
      setdata(body.studentData[_id]);
    };
    loadUsers();
  }, []);
  console.log(user);
  

  return (
    <div className={classes.root} class="mainpage ">
      <div ><h1 >User Details</h1><br/><h2></h2></div>

      <Paper className={classes.paper} >
      <div class="fl w-60  ">  
      
            <Button
            variant="contained"
            color="//#endregion"
            rel="noopener noreferrer" >

                <Link to='/'> Go To Home</Link>   
             </Button> 
        </div>
      <TableContainer className={classes.container} >
          <Table
            className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Id
                    </TableCell>
                    <TableCell>
                       Name
                    </TableCell>
                    <TableCell>
                        Username
                    </TableCell>
                    <TableCell>
                        Email
                    </TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
        

                  
                    <TableRow>
                      <TableCell >
                        {user._id}
                      </TableCell>
                      <TableCell >
                        {user.name}
                      </TableCell>
                      <TableCell >
                        {user.username}
                      </TableCell>
                      <TableCell >
                        {user.email}
                      </TableCell>
                      </TableRow>
                      
            </TableBody>
          </Table>
        </TableContainer>
      
        
           
                   
           
           
           
        
        
         
            
      </Paper>
      
    </div>
  );
};



export default User;
