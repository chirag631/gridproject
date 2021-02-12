import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    
  },
  
  media: {
    height:250
  },
});

export default function Gridcard(props) {
  const classes = useStyles();

  const {name}=props;
  

  return (

    <Card  className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/abcd.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        <Button size="small" color="primary">
        <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </Button>
          
          
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}