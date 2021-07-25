import React,{Fragment} from "react";
import {useSelector} from "react-redux";
import {routes} from "../helpers/routes"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Login from "../pages/login";
import Home from "../pages/home"
import MainHolder from "./MainHolder";
const HomeCont =()=> {
  const user =useSelector((state)=> state.user)
  console.log(user.id, "hhhh")
  return (
    <BrowserRouter>
    <Switch>
    {!user.id ?(
      <Route component={Login} exact path="/"/>): (
        <MainHolder >
        <Route component={Home} exact path="/"/> 
        </MainHolder>
      )     
    }
    </Switch>
    </BrowserRouter>

  )
}
export default HomeCont;