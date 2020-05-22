import React from "react";
import "./App.css";
import Home from "./homepage";
import LoginHomePage from "./LoginHomePage";
import MyTickets from "./mytickets"
import Ticket from './Ticket';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./search";
import Seats from './seat-picker'
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={LoginHomePage} />
        <Route exact path="/homepage" component={Home} />

        <Route path="/search" component={Search} />

        <Route path="/seats" component={Seats} />
        <Route exact path="/ticket" component={Ticket} />
        <Route exact path="/myTickets" component={MyTickets} />
      </Switch>
      </Router>

      {/* <Home /> */}
    </div>
  );
}
export default App;
