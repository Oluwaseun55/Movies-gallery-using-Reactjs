import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { MovieProvider } from "./contexts/MovieContext"; // ✅ Make sure this path is correct
import "./css/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MovieProvider>
      {" "}
      {/* ✅ Wrap here */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MovieProvider>
  </StrictMode>
);
