import React from "react";
import "./App.css";
import Home from "./homepage";
<<<<<<< HEAD
import LoginHomePage from "./LoginHomePage";
||||||| merged common ancestors

=======
import LoginHomePage from "./LoginHomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./search";
>>>>>>> 7287a8f81032643ec015f145f69fcf5c89454221
function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <LoginHomePage />
      {/* <Home /> */}
||||||| merged common ancestors
      <Home />
=======
      <Router>
      <Switch>
        <Route exact path="/" component={LoginHomePage} />
        <Route exact path="/homepage" component={Home} />

        <Route path="/search" component={Search} />
      </Switch>
      </Router>

      {/* <Home /> */}
>>>>>>> 7287a8f81032643ec015f145f69fcf5c89454221
    </div>
  );
}
export default App;
