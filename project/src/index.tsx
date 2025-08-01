import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DesignThinking } from "./screens/DesignThinking";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DesignThinking />
  </StrictMode>,
);
