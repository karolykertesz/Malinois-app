import React, { useEffect } from "react";
import "../src/css/style.css";
import HomeCont from "./components/HomeCont";
import { Provider } from "react-redux";
import { store } from "./reducers";
const App: React.FC = () => {
  useEffect(() => {
    const rt = async () => {
      const rt = await fetch("http://localhost:3007/auth/ping");
      console.log(rt);
    };
    rt();
  }, []);
  return (
    <div className="App">
      <Provider store={store}>
        <HomeCont />
      </Provider>
    </div>
  );
};

export default App;
