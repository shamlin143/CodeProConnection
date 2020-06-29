import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
// export function Navbar(props) {
//   var NewComponent = React.createClass({
//     render: function() {
//     return (
// <nav class="navbar navbar-default">
//   <div class="container-fluid">
//     <div class="navbar-header">
//       <a class="navbar-brand" href="#">CodeProConnection</a>
//     </div>
//     <ul class="nav navbar-nav">
//       <li class="active"><a href="/">Login</a></li>
//       <li><a href="/signup/">SignUp</a></li>
//       <li><a href="/JobPosts/">View Jobs</a></li>
//       <li><a href="/PostaJob/">Post a Job</a></li>
//     </ul>
//   </div>
// </nav>
//     );
//   }
//   }
// }
