<<<<<<< HEAD
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { routes } from "../helpers/routes";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
=======

import {useSelector} from "react-redux";
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Login from "../pages/login";
import Home from "../pages/home"
import About from "../pages/about"
>>>>>>> 4f366732398f83c8878d86db573eccc0a5fbda86
import MainHolder from "./MainHolder";
const HomeCont = () => {
  const user = useSelector((state) => state.user);

  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Switch>
        {!user.id ? (
          <Route component={Login} exact path="/" />
        ) : (
          <MainHolder>
            <Route component={Home} exact path="/" />
          </MainHolder>
        )}
      </Switch>
=======
    <Switch>
    {!user.id ?(
      <Route component={Login} exact path="/"/>): (
        <MainHolder >
        <Route component={Home} exact path="/"/> 
        <Route component={About} exact path="/about"/> 

        </MainHolder>
      )     
    }
    </Switch>
>>>>>>> 4f366732398f83c8878d86db573eccc0a5fbda86
    </BrowserRouter>
  );
};
export default HomeCont;
