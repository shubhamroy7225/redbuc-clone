import React from "react";
import "./App.css";
import LoginHomePage from "./LoginHomePage";
import Home from "./homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/home-page" component={Home} />
          <Route  path="/" component={LoginHomePage} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
