import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter ,Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<StrictMode>
      <Routes>
        <Route exect path="/" element={<App />} />
        <Route path="/Sobre" element={<About />} />
        <Route path="/Projetos" element={<Projects />} />
      </Routes>
    </StrictMode>
	</BrowserRouter>
);
