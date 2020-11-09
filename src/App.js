import React from "react";
import MainContexProvider from "./context/Maincontex";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <MainContexProvider>
        <Container />
      </MainContexProvider>
    </div>
  );
}

export default App;
