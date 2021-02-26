import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Gridcard from './Gridcard';
import {Button, Typography} from '@material-ui/core';

import Navbar from './Navbar';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   justify:'center',
   
    textAlign:'center',
    marginTop:20

  },
  
  margin:{
    margin:theme.spacing(2),
    minWidth:150,
  },
  Typography:{
    color:"#fa7068"
  }
 
}));

export default function Home(props) {
  
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
          <Grid item xl={2} lg={3} md={4} xs={12} sm={6} spacing={3} >
          <Gridcard id={card._id} image={card.image} name={card.name} />
        </Grid>
      </React.Fragment>
    );
  }  
  console.log(data1);
  return (
    <div>
      <Navbar/>
    <div className={classes.root} >  
    <Typography className={classes.Typography}  variant="h4"  gutterBottom >STUDENT PROFILE</Typography>  
        <Grid container justify="center" >
        <Grid container item xs={12} spacing={4} justify="flex-start"  >
            {(data1).map(FormRow)}  
        </Grid>
      </Grid>
    </div>
    </div>
  
  );
}