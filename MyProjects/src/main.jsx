import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import File from "./File_Upload/File.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <File/>
  </StrictMode>
);
