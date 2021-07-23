import React,{Fragment} from "react";
import {useSelector} from "react-redux";
import {routes} from "../helpers/routes"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Login from "../pages/login";
import Home from "../pages/home"
const HomeCont =()=> {
  const user =useSelector((state)=> state.user)
  
  return (
    <Fragment>
    <BrowserRouter>
    <Switch>
    <Route path="/" component={!user.id ? Login : Home} exact="true"/>
{user.id == null&& (
  <Fragment>
  {  routes.map((route)=> (
    <Route key={Route.path} path={Route.path} exact={Route.exact} component={route.component}/>
  ))}
  </Fragment>
)}
    
    </Switch>
    </BrowserRouter>
    </Fragment>
  )
}
export default HomeCont;