import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Gridcard from './Gridcard';
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'99%',
    textAlign:'center',
    marginTop:5

  },
  paper: {
    padding: theme.spacing(1),
    
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margin:{
    margin:theme.spacing(2),
    minWidth:150,
  },
 
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
          <Grid item xs={4} >
          <Paper className={classes.paper}><Gridcard id={card._id} image={card.image} name={card.name} /></Paper>
        </Grid>
      </React.Fragment>
    );
  }  
  console.log(data1);
  return (
    
    <div className={classes.root} >         
        <Button variant="contained" className={classes.margin}  >
          <Link   to={{pathname:"/Signup"}} >
              Signup User
           </Link>                  
          </Button>
          <Button variant="contained" className={classes.margin}  >
          <Link   to={{pathname:"/login"}} >
              Login
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