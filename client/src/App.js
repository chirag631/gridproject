import logo from './logo.svg';
//import './App.css';
import Home from './components/Home';
import Login from './components/Login'

//import './MainStyle.css';
import Users from './components/Users'

import Signup from './components/Signup'
import Homepage from './components/Homepage'
import Logout from './components/Logout'
import Addproject from "./components/Addproject"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


function App() {
  return (
    <Router >
      
    <div >
    
      <Switch>
        <Route exact path="/" component={Home} />
        
        <Route exact path="/login"  component={Login} />
        
        <Route path="/Homepage" component={Homepage} />
        <Route  path="/logout"  component={Logout} />
        <Route  path="/Signup"  component={Signup} />
        <Route path="/Homepage" component={Homepage} />
        <Route path="/Addproject" component={Addproject}/>
        <Route  path="/:name"    component={Users} />
        
      </Switch>
      
    </div>
 
  </Router>
  );
}

export default App;
