import React from "react";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {MainContent} from "./components/MainContent/MainContent";

function App() {
    return (
        <div className="container">
            <Header/>
            <Navbar/>
            <MainContent/>
        </div>
    )
}

export default App;