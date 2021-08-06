import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let rerenderReact = (data, methods) => {
  ReactDOM.render(
    <React.StrictMode>
      <App data={data} methods={methods} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

export default rerenderReact;
