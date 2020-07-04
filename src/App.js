//basic react app imports
import React from 'react';
import logo from './logo.svg';
import './App.css';

//navbar imports
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';

//import other pages
import { Home } from './Home';
import { About } from './About';
import { Login } from './Login';
import { Logout } from './Logout';
import { Register } from './Register';
import { Listings } from './Listings';
import { NoMatch } from './NoMatch';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
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
