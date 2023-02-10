import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ReactGA from 'react-ga4';

//Google Analytics initialization function
ReactGA.initialize('G-QQLJTPLDJ6');


//Google Analytics pageview function
export const GAPageView = (page) => {   
  ReactGA.pageview(page);   
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
