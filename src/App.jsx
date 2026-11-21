import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={null} />
        <Route path="/nosotros" element={<h1>Nosotros</h1>} />
        <Route path="/servicios" element={<h1>Servicios</h1>} />
        <Route path="/proyectos" element={<h1>Proyectos</h1>} />
        <Route path="/contacto" element={<h1>Contacto</h1>} />
      </Routes>
    </BrowserRouter>
  );
}