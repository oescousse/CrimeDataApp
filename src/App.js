//basic react app imports
import React from 'react';
import './App.css';

//navbar imports
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBarLoggedOut } from './components/NavigationBarLoggedOut';
import { NavigationBarLoggedIn } from './components/NavigationBarLoggedIn';

//import other pages
import { Home } from './Home';
import { About } from './About';
import { Login } from './Login';
import { Logout } from './Logout';
import { Register } from './Register';
import { Listings } from './Listings';

function App(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn){
    return (
      <React.Fragment>
        <Router>
          <NavigationBarLoggedIn />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/listings" component={Listings} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </Router>
      </React.Fragment>
    );  
  }

  return (
    <React.Fragment>
      <Router>
        <NavigationBarLoggedOut />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/listings" component={Listings} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
