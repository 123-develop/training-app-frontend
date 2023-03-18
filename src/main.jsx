import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import "./styles/index.css";
import "./styles/calendar.css";

import { store } from "./redux";

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <Provider store={store}>
   <App />
  </Provider>
 </React.StrictMode>
);
