import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function button(props) {
  return (
    <span className="button" {...props} role="button" tabIndex="0">
   SignUp
    </span>
  );
}

export default button;