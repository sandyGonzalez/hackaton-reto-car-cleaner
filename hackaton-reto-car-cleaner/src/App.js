import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './views/Welcome/index'

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path = "/" render = {props => <Welcome/>}></Route> */}
        {/* <Route exact path = "/registerUser" render = {props => <RegisterUser/>}></Route> */}
        {/* <Route exact path = "/registerEmployee" render = {props => <RegisterEmployee/>}></Route> */}
        <Route exact path = "/welcome" render = {props => <Welcome/>}></Route>
      </Switch>
    </Router> 
  );
}

export default App;
