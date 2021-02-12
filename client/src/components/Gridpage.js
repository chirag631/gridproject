import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Gridcard from './Gridcard';
import {Button} from '@material-ui/core'
import datalist from '../data.json';
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'99%',
    

  },
  paper: {
    padding: theme.spacing(1),
    
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margin:{
    marginBottom:theme.spacing(2)
  }
}));
const abc='';
export default function NestedGrid(props) {
  const classes = useStyles();
  const [data1,setdata]=useState([]);
  useEffect(() => {
    const loadUsers = async () => {
      const res= await fetch("/register");
      const body=await res.json();
      
      setdata(body.studentData);
    };
    loadUsers();
  }, []);
  
  function FormRow(card,index) {
    return (
      
      <React.Fragment>
        
          <Grid item xs={4} >
          <Paper className={classes.paper}><Gridcard name={card.name} /></Paper>
        </Grid>
        
        
        
      </React.Fragment>
    );
  }
  console.log(datalist);
  console.log(data1);
  return (
    <div className={classes.root} >
                 
        <Button variant="contained" className={classes.margin} color="//#region" >
          <Link class="btn btn-primary mr-2"  to={{pathname:"/Signup"}} >
              Signup User
           </Link>                  
          </Button>
           
           
        <Grid container spacing={1}>
        
        <Grid container item xs={12} spacing={3}>
            {(data1).map(FormRow)}
         
        </Grid>
       
      </Grid>
      
      
    </div>
  );
}