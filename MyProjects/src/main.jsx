import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UseMemo from "./Hooks/UseMemo.jsx";
import Data from "./components/data.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
     <Data/>
    </StrictMode>
 
);
