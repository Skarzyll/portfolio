import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter ,Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<StrictMode>
      <Routes>
        <Route exect path="/" element={<App />} />
      </Routes>
    </StrictMode>
	</BrowserRouter>
);
