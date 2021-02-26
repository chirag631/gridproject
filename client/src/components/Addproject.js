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
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Navbaruser from './Navbaruser';
import Sidebar from './Sidebar';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#192d3e',
      contrastText: '#fff',
    },
    
  },
});
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
    console.log(formData);
    
    axios.post("/postprojectdata",formData,{headers: {
      "content-type": 'multipart/form-data',
    },},
  ).then(res=>{
    const status=res.data.status;
    if(status=='true'){
      handleClose();
    }
    const message=res.data.message;
    alert(message);
    console.log(message)
  } 
  )
  .catch((err)=>{
    alert(err)
    console.log(err)
  });
 
  }
  console.log(fetchdata);
    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
      };
      const handleChangeDiscription = (event) => {
        setDiscription(event.target.value);
      };
      const handleClose = () =>{
          setDiscription('');
          setTitle('');
          setFilename('');
      }
      if(logdin===false){
        return <Redirect to="/login"/>;
    }

    
  return (
    <div>
        <Navbaruser />
      <div className={classes.root}>  
      <Grid container color="primary" justify="center" direction="row">
      <Grid xs={12} container Items justify="flex-start" >
        <Grid xs={5} sm={4} md={3} lg={2} xl={2} Items>
          <Sidebar />
                
                   </Grid> 
                   <Grid xs Items>
    

    <Grid container  
    justify="center" 
      >
      <Grid item justify='center' xl={2} lg={4} xs={10} md={6} sm={8}>
      
      <Card  >
      
      <CardContent>
          <Typography gutterBottom variant="h5"className={classes.Typography} component="h1">
             Add Project
          </Typography>
            <form  onSubmit={handleSubmit} >
              
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
            
            
                    
              <TextField
              id="outlined-required"
              helperText="Project Image*"
              className={classes.margin}
              required
              type="file"
              fullWidth
              filename="articalImage"
              onChange={onChange}
              variant="outlined"
              />
              <ThemeProvider theme={theme}>
                <Button 
                type="submit" color="primary"  
                className={classes.button} variant="contained" 
                disabled={!title} disabled={!discription} disabled={!filename}
                >
              Submit
            </Button>
            </ThemeProvider>
          </form>
      </CardContent>
      </Card>
      
      </Grid>
      
    </Grid>
    </Grid>
    </Grid>
    </Grid>

    </div>
    </div>
  );
}