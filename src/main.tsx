/**
 * Punto de entrada de la aplicación.
 * Monta el componente raíz `App` dentro del nodo `#root` de `index.html`.
 */
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
