import React from "react";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import SignUp from "./pages/signup";
import Nav from "./components/Nav";
import { BrowserRouter, Switch,  Route }   from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <BrowserRouter>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path = {["/", "/CodePro"]}>
         <Login />
        </Route>
        <Route exact path = {["/signup"]}>
         <SignUp />
         </Route>
        <Route exact path = "/CodePro/:id">
          <Detail />
        </Route>
        <Route>
          <NoMatch />
        </Route>        
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
