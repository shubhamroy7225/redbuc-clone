import React from "react";
import "./App.css";
import LoginHomePage from "./LoginHomePage";
import Home from "./homepage";
import Ticket from "./Ticket";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/home-page" component={Home} />
          <Route  path="/ticket-page" component={Ticket} />
          <Route  path="/" component={LoginHomePage} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
