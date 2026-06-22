// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { PI } from "./App.jsx";

console.log(PI);

createRoot(document.getElementById("root")).render(
  // <StrictMode>

  <App />,
  // </StrictMode>,
);
