import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { MainContent } from "./components/MainContent/MainContent";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navbar />
        <MainContent />
      </div>
    </BrowserRouter>
  );
}

export default App;
