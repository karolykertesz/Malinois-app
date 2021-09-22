import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import About from "../pages/about";
import MainHolder from "./MainHolder";
const HomeCont = () => {
  const user = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Switch>
        {!user.id ? (
          <Route component={Login} exact path="/" />
        ) : (
          <MainHolder>
            <Route component={Home} exact path="/" />
          </MainHolder>
        )}
      </Switch>
    </BrowserRouter>
  );
};
export default HomeCont;
