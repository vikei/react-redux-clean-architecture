import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import GlobalStyles from "../library/global-styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Route path="/">Ready to start...</Route>
      </BrowserRouter>
    </>
  );
}

export default App;
