import React from "react";
import "./styles.scss";
import SignUp from "./Components/SignUp.js";
import Login from "./Components/Login.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route path="/SignUp" component={SignUp} exact />
    //     <Route path="/Login" component={Login} exact />
    //     <Route path="/" component={SignUp} exact />
    //   </Switch>
    // </BrowserRouter>
    <>
      <div className="App">
        <SignUp />
      </div>
    </>
  );
};
export default App;
