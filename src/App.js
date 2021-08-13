import React from "react";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { MainContent } from "./components/MainContent/MainContent";
import { BrowserRouter } from "react-router-dom";

function App({ store }) {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navbar store={store} />
        <MainContent store={store} />
      </div>
    </BrowserRouter>
  );
}

export default App;
