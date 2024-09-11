import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "./styles/GlobalStyles";
import Index from "./pages/index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <Index />
  </StrictMode>
);
