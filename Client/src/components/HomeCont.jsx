import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/login.tsx";
import Home from "../pages/home";
import About from "../pages/about";
import MainHolder from "./MainHolder";

const HomeCont = () => {
  const { id } = useSelector((state) => state.user.init);

  return (
    <BrowserRouter>
      <Switch>
        <MainHolder>
          <Route component={id ? Login : Home} exact path="/" />
        </MainHolder>
      </Switch>
    </BrowserRouter>
  );
};
export default HomeCont;
