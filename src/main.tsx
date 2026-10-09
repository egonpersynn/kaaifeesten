import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const fonts = document.createElement("link");
fonts.rel = "stylesheet";
fonts.href = "https://fonts.cdnfonts.com/css/tt-commons";
document.head.appendChild(fonts);
const root = document.getElementById("root");
if (root) createRoot(root).render(<App />);
