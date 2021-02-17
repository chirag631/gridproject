import React from 'react';
import NestedGrid from './Gridpage';
import Typography from '@material-ui/core/Typography';
import CssBaseline from "@material-ui/core/CssBaseline";
import {Button, lighten} from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const themeLight = createMuiTheme({
    palette: {
      background: {
        default: "#ffffff"
      }
    }
  });
const Home = () =>{
const [light, setLight] = React.useState(true);
    
    return(
        <ThemeProvider theme={light?themeLight:'' }>
    <CssBaseline />
        <div >
      
        <NestedGrid />

        </div>
        </ThemeProvider>
    )
}

export default Home;