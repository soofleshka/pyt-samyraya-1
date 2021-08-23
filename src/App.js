import React from "react";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { MainContent } from "./components/MainContent/MainContent";
import useInitialization from "./hooks/useInitialization";
import Preloader from "./components/common/Preloader/Preloader";

function App() {
  const { isInitialized, initializeApp } = useInitialization();
  initializeApp();
  if (!isInitialized) return <Preloader />;

  return (
    <div className="container">
      <Header />
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
