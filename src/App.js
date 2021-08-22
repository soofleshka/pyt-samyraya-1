import React from "react";
import { connect } from "react-redux";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { MainContent } from "./components/MainContent/MainContent";
import { initializeApp } from "./redux/reducers/app-reducer";
import Preloader from "./components/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.isInitialized) return <Preloader />;
    return (
      <div className="container">
        <Header />
        <Navbar />
        <MainContent />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
