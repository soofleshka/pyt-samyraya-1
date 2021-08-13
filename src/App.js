import React from "react";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { MainContent } from "./components/MainContent/MainContent";
import { BrowserRouter } from "react-router-dom";

function App({ state, dispatch }) {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navbar friends={state.navbarPage.friends} />
        <MainContent state={state} dispatch={dispatch} />
      </div>
    </BrowserRouter>
  );
}

export default App;
