import "./styles/global.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./context/appContext";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
