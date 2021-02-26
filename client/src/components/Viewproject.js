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
import {Redirect} from 'react-router-dom'
import Navbaruser from './Navbaruser'
import Sidebar from './Sidebar';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justify:'center',
    textAlign:'center',
    marginTop:20,
    
  },
  root1:{
    minHeight:350
  },
  media: {
    height:250
  },
  
  margin:{
    marginBottom:theme.spacing(2)
  },
}));
export default function Users() {
  const classes = useStyles();
  const [data1,setdata]=useState([]);
  
  const userid=localStorage.getItem("userid");
  const token=localStorage.getItem("token");
  let logedin=true;
  if(token==null){
      logedin=false;
      }
      const [logdin,setLogdin]=useState(logedin);

console.log(userid)
  useEffect(() => {
    const loadUsers = async () => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({userid}),
    };
      const res= await fetch("/viewprojectdata",requestOptions);
      const body=await res.json();
      console.log(body)    
      setdata(body.studentData);
    };
    loadUsers();
  }, []);
  if(logdin===false){
    return <Redirect to="/login"/>;
}
  function FormRow(card,index) {
    return (
      
      <React.Fragment>
        
          <Grid item xl={2} lg={3} md={4} xs={12} sm={6} spacing={3} >
        
          <Card  className={classes.root1}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          
          image={`/uploads/${card.image}`}
          title="Contemplative Reptile"
        />
        <CardContent>
        
        <Typography gutterBottom variant="h5" component="h2">
        
              {card.title}
          </Typography>
           </CardContent>
      </CardActionArea>
        </Card>
        
        </Grid>
         
      </React.Fragment>
    );
  }
 
  console.log(data1);
  return (
      <div>
          <Navbaruser />
    <div className={classes.root} >
    <Grid container color="primary" justify="center" direction="row">
      <Grid xs={12} container Items justify="flex-start" >
        <Grid xs={5} sm={4} md={3} lg={2} xl={2} Items >
          <Sidebar />
                
                   </Grid>
                   <Grid xs Items>
                 
          <Grid container justify="center">
        <Grid container item xs={12} spacing={4} justify="flex-start">
            {data1.map(FormRow)}
        </Grid>
      </Grid>
      </Grid>
      </Grid>
      </Grid>
    </div>
    </div>
  );
}