
import "../src/css/style.css"
import HomeCont from "./components/HomeCont";
import {Provider} from "react-redux"
import {store} from "./reducers/index"

function App() {
  return (
<Provider store={store}>
  <HomeCont/>
  </Provider>
  );
}

export default App;
