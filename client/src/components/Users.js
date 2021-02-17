import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Button} from '@material-ui/core'
import {Link, useParams} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'99%',
    textAlign:'center',
    marginTop:5

  },
  media: {
    height:250
  },
  paper: {
    padding: theme.spacing(1),
    
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margin:{
    marginBottom:theme.spacing(2)
  },
  
  
}));

export default function Users(props) {
  const classes = useStyles();
  const [data1,setdata]=useState([]);
  const {name}=useParams();
 
 
  console.log(props)

  useEffect(() => {
    const loadUsers = async () => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({name}),
    };
      const res= await fetch("/getprojectdata",requestOptions);
      const body=await res.json();
      console.log(body)    
      setdata(body.studentData);
    };
    loadUsers();
  }, []);
  
  function FormRow(card,index) {
    return (
      
      <React.Fragment>
        
          <Grid item xs={4} >
          <Paper className={classes.paper}>
            
          <Card  className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/project.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        
        <Typography gutterBottom variant="h5" component="h2">
        
              {card.title}
           
            
          </Typography>
        
        
          
            </CardContent>
      </CardActionArea>
      
        </Card>
        </Paper>
        </Grid>
         
      </React.Fragment>
    );
  }
 
  console.log(data1);
  return (
    <div className={classes.root} >
                 
        <Button variant="contained" className={classes.margin} color="//#region" >
          <Link class="btn btn-primary mr-2"  to="/" >
              Go To Home
           </Link>                  
          </Button>
           
           
          <Grid container spacing={1}>
        
        <Grid container item xs={12} spacing={3}>
            {data1.map(FormRow)}
         
        </Grid>
       
      </Grid>
      
      
    </div>
  );
}