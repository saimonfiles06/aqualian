import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioView from "./views/InicioView";
import NosotrosView from "./views/NosotrosView";
import ServiciosView from "./views/ServiciosView";
import ProyectosView from "./views/ProyectosView";
import ContactoView from "./views/ContactoView";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioView />} />
        <Route path="/nosotros" element={<NosotrosView />} />
        <Route path="/servicios" element={<ServiciosView />} />
        <Route path="/proyectos" element={<ProyectosView />} />
        <Route path="/contacto" element={<ContactoView />} />
      </Routes>
    </BrowserRouter>
  );
}