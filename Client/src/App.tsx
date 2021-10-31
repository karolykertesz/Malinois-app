import React, { useEffect } from "react";
import "../src/css/style.css";
import HomeCont from "./components/HomeCont";
import { Provider } from "react-redux";
import { store } from "./reducers";
import { initApp } from "./helpers/firebase";
const App: React.FC = () => {
  useEffect(() => {
    initApp();
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
