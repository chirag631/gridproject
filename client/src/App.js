import logo from './logo.svg';
//import './App.css';
import Home from './components/Home';
import Login from './components/Login'

//import './MainStyle.css';
import Users from './components/Users'
import Adduser from './components/Adduser'
import Signup from './components/Signup'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/Signup"  component={Signup} />
        <Route  path="/Adduser"  component={Adduser} />
        
        <Route  path="/login"  component={Login} />
        <Route  path="/:name" id=":_id"   component={Users} />
        
      </Switch>
    </div>
  </Router>
  );
}

export default App;
