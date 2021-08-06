import React from "react";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { MainContent } from "./components/MainContent/MainContent";
import { BrowserRouter } from "react-router-dom";

function App({ data, methods }) {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navbar friends={data.navbarPage.friends} />
        <MainContent
          data={data.mainContentPage}
          methods={methods.mainContentPage}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
