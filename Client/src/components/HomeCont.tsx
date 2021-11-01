import React from "react";
import { useAppSelector as selector } from "../reducers/redux-hook";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import About from "../pages/about";
import MainHolder from "./MainHolder";
import SignUp from "../pages/signup";

const HomeCont: React.FC = () => {
  const { id } = selector((state) => state.user);

  return (
    <BrowserRouter>
      <Switch>
        <MainHolder>
          <Route component={Login} exact path="/" />
          <Route component={SignUp} exact path="/signup" />
        </MainHolder>
      </Switch>
    </BrowserRouter>
  );
};
export default HomeCont;
