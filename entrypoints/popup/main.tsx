// Imports required
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CopilotKit } from "@copilotkit/react-core";

// Global stylesheet
import "~/assets/global.css";

// Rendering App
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CopilotKit runtimeUrl="/api/copilotkit">
      <App />
    </CopilotKit>
  </React.StrictMode>,
);
