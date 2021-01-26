import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginClient from "./components/LoginClient";
import Api from "./components/Main";
import SignUpClient from "./components/SignUpClient";
import Main from "./components/Main";
import Getme from "./components/Getme";
import "./styles/index.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true} component={LoginClient} />
        <Route path="/main" exact={true} component={Main} />
        <Route path="/getme" exact={true} component={Getme} />
      </Switch>
    </div>
  );
}

export default App;
