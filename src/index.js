import reportWebVitals from "./reportWebVitals";
import data, { methods } from "./redux/state";
import rerenderReact from "./rerender";

rerenderReact(data, methods);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
