import React from "react";
import Header from "./components/header/Header";
import MainContent from "./components/main_content/MainContent";


function App(): JSX.Element {
  return (
    <React.Fragment>
      <Header></Header>
      <MainContent></MainContent>
    </React.Fragment>
  );
}

export default App;
