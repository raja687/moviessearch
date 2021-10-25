import React from "react";
import { Link } from "react-router-dom";
import "./Newroute.css";
function Nav() {
  return (
    <nav>
      <h3>logo</h3>
      <ul className="nav-links">
        <Link style={{ color: "greenyellow" }} to="/about">
          <li>About</li>
        </Link>
        <Link to="/Netflix">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
