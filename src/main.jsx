import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from "./pages/Index";
import { GlobalStyles } from "./styles/GlobalStyles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <Index />
  </StrictMode>
);
