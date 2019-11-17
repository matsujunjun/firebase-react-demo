import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Kitami from "components/Kitami";
import Home from "components/Home";
import Demo from "components/Demo";

const App: React.FC = () => {
  return (
    <div className="App-container">
      <Router>
        <Switch>
          <Route strict exact path="/" component={Kitami} />
          <Route strict exact path="/home" component={Home} />
          <Route strict exact path="/demo" component={Demo} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
