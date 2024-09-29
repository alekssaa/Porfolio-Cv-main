import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ContextProvaider } from "./context/contex";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import "bootstrap/dist/css/bootstrap.css";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvaider>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QueryClientProvider>
  </ContextProvaider>
);

reportWebVitals();
