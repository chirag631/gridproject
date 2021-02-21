import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'


const useStyles = makeStyles({
  root: {
    minHeight:520
    
  },
  
  media: {
    minHeight:400,
    minWwidth:250
  },
  button:{
    backgroundColor:"#192d3e",
    color:"#fff",
    minWidth:300,
    marginTop:5,
    marginBottom:5
  },
});

export default function Gridcard(props) {
  const classes = useStyles();

  const {name}=props;
  const {id}=props;
const {image}=props;
  
  
console.log(image);
  
  return (

    <Card  className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`/users/${image}`}
          title="Contemplative Reptile"
        />
        <CardContent>
        
        <Typography gutterBottom variant="h5" component="h2">
        <Link to={{pathname:`/${name}`}}   >
        
              {name}
          </Link> 
          
          
            
          </Typography>
        
        
          
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}