import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <h3>This is Search Page</h3>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
