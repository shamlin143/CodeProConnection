import React from "react";
var Link = require('react-router').Link

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Code Pro Connection
      </a>
      <Link id="login" to="/" className={window.location.pathname === "/" || window.location.pathname === "/" ? "nav-link active" : "nav-link" } > Login </Link>
      <Link id="signup" to="/signup" className={window.location.pathname === "/signup" || window.location.pathname === "/signup" ? "nav-link active" : "nav-link" } > SignUp </Link>
    </nav>
  );
}
    


export default Nav;
