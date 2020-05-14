import React from "react";
import "./App.css";
import Home from "./homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
          <Route path="/" component={Home} />
         
        </Switch>
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
