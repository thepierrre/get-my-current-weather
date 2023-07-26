import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DayPartContextProvider from "./DayPartContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DayPartContextProvider>
      <App />
    </DayPartContextProvider>
  </React.StrictMode>
);
