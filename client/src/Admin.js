import Home from './components/Home';
import Login from './components/Login'
import Users from './components/Users'
import Signup from './components/Signup'
import Homepage from './components/Homepage'
import Logout from './components/Logout'
import Addproject from "./components/Addproject"
import Updateprofile from './components/Updateprofile'
import Viewproject from './components/Viewproject';
import Navbar from './components/Navbar'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#192d3e"
    },
    
  }
});

function Admin() {
  
  return (
    <ThemeProvider theme={themeLight}>
    <CssBaseline />
<div >
    
    <Router >
     
      <Navbar />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login"  component={Login} />        
        <Route  path="/Signup"  component={Signup} />
        
        
     
        <Route  path="/:name"    component={Users} />

      </Switch>
    

  </Router>
  </div>
   </ThemeProvider>
  );
}

export default Admin;
