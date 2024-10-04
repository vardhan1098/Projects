import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Context from "./Pratice/Context.jsx";
import Posts from "./Pratice/Posts.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <Posts />
    </Context>
  </StrictMode>
);
