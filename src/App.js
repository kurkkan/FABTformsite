import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import WelcomePage from './components/WelcomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/welcome" component={WelcomePage} />
      </Switch>
    </Router>
  );
};

export default App;
