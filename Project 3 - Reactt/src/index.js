import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import App2 from "./App2";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <h1> Student Record : </h1>
    <App />
    <App2 />
  </React.StrictMode>
);
