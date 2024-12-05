import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

// Start
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>Hello, world!</h1>
  </StrictMode>
);