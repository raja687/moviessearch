import React from "react";
import "./Newroute.css";
import Nav from "./Nav";
import Shop from "./Shop";
import About from "./About";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Newroute() {
  return (
    <Router>
      <div className="Newroute">
        <Nav />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exactpath="/shop" component={Shop} />
          <Route exact path="/raj" component={Raj} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
function Raj() {
  return <h2>Raj</h2>;
}
export default Newroute;
