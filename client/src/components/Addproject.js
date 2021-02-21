import React, { useState} from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link} from "react-router-dom";
import { TextField } from '@material-ui/core';
import {Redirect} from 'react-router-dom'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:20,
    
    textAlign:'center',
  },
  Typography:{
    marginTop:50,
    marginBottom:30,
  }, 
  margin: {
      marginRight: theme.spacing(1),
     marginBottom:theme.spacing(1),
  },
    button:{
      backgroundColor:"#192d3e",
      color:"#fff",
      
      marginTop:30,
      marginBottom:5
    }, 
}));

export default function Addproject() {
    
  const classes = useStyles();
  const [name, setName] = useState('');
  const [filename, setFilename] = useState('');
  const [title, setTitle] = React.useState('');
  const [discription, setDiscription] = React.useState('');
  const [fetchdata,setFetchdata]=React.useState('');
  const userid=localStorage.getItem("userid");
  const token=localStorage.getItem("token");
  let logedin=true;
  if(token==null){
      logedin=false;
      }
      const [logdin,setLogdin]=useState(logedin);
console.log(userid);
const onChange = e => {
    
  setFilename(e.target.files[0]);
  setName(e.target.files[0].name)
};
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('articalImage',filename)
    formData.append('title', title);
    formData.append('discription',discription)
    formData.append('userid', userid);
    formData.append('name',name)
    console.log(title);

    axios.post('/postprojectdata',formData     
  ).then(res=>{
    const message=res.data.message;
    console.log(message)
  } 
  ).then(()=>{
    handleClose();
  })
  .catch(err=>console.log(err));
 
  }
  console.log(fetchdata);
    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
      };
      const handleChangeDiscription = (event) => {
        setDiscription(event.target.value);
      };
      const handleClose = () =>{
        alert("Project Added successfully")
          setDiscription('');
          setTitle('');
          setFilename('');
      }
      if(logdin===false){
        return <Redirect to="/login"/>;
    }
  return (
      <div className={classes.root}>   
    <Button variant="contained" className={classes.margin}  >
    <Link   to={{pathname:"/Homepage"}} >
        Go To Homepage
     </Link>                  
    </Button>

    <Grid container  
    justify="center" 
      className={classes.root}>
      <Grid item justify='center' xl={2} lg={4} xs={10} md={6} sm={8}>
      
      <Card  >
      
      <CardContent>
          <Typography gutterBottom variant="h5"className={classes.Typography} component="h1">
             Addproject
          </Typography>
            <form  onSubmit={handleSubmit} encType="multipart/form-data">
      <TextField
      required
      className={classes.margin}
        id="outlined-textarea"
        label="Project Title"
        value={title}
        onChange={handleChangeTitle}
        fullWidth
        variant="outlined"
      />
      <TextField
      className={classes.margin}
      required
        id="outlined-textarea"
        label="Discription"
        value={discription}
        onChange={handleChangeDiscription}
        fullWidth
        variant="outlined"
      />
      <div>
      
      <input
            type='file'
            filename="articalImage"
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
          </label>
          </div>
        <Button 
        type="submit"  
        className={classes.button} variant="contained" 
        disabled={!title} disabled={!discription} 
        >
      Submit
    </Button>
    
    </form>
      </CardContent>
      </Card>
      
      </Grid>
      
    </Grid>
    </div>
    
  );
}