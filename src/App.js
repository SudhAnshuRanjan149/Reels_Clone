import React from "react";
import "./styles.scss";
import SignUp from "./Components/SignUp.js";
import Login from "./Components/Login.js";
import ResetPassword from "./Components/ResetPassword";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/SignUp" component={SignUp} exact />
          <Route path="/Login" component={Login} exact />
          <Route path="/" component={SignUp} exact />
          <Route path="/ResetPassword" component={ResetPassword} exact />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
