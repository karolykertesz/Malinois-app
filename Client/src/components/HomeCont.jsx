import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import About from "../pages/about";
import MainHolder from "./MainHolder";
const HomeCont = () => {
  const id = useSelector((state) => state.user.initUser.id);

  return (
    <BrowserRouter>
      <Switch>
          <MainHolder>
            <Route component={ !id ? Login:Home} exact path="/" />
          </MainHolder>
      </Switch>
    </BrowserRouter>
  );
};
export default HomeCont;
