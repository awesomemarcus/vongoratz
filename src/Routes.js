import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from 'core/Home';
import Login from 'core/Login';
import Investments from 'Investments';
import Travels from 'Travels';
import Investment from 'Investments/Investment';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>

          <Route exact path="/investments" component={Investments}/>
          <Route path="/investments/:investment" component={Investment}/>

          <Route path="/travels" component={Travels} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}
