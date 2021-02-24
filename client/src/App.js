import Home from './components/Home';
import Login from './components/Login'
import Users from './components/Users'
import Signup from './components/Signup'
import Homepage from './components/Homepage'
import Logout from './components/Logout'
import Addproject from "./components/Addproject"
import Updateprofile from './components/Updateprofile'
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

function App() {
  
  return (
    <Router >
      <ThemeProvider theme={themeLight}>
    <CssBaseline />
    <div >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login"  component={Login} />        
        <Route path="/Homepage" component={Homepage} />
        <Route  path="/logout"  component={Logout} />
        <Route  path="/Signup"  component={Signup} />
        <Route path="/Homepage" component={Homepage} />
        <Route path="/Addproject" component={Addproject}/>
        <Route path="/Updateprofile" component={Updateprofile}/>
        <Route  path="/:name"    component={Users} />
      </Switch>
    </div>
 </ThemeProvider>
  </Router>
  );
}

export default App;
