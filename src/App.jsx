import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app__contenido">
          {/* <Routes>
            <Route path="/" element={null} />
            <Route path="/nosotros" element={<h1>Nosotros</h1>} />
            <Route path="/servicios" element={<h1>Servicios</h1>} />
            <Route path="/proyectos" element={<h1>Proyectos</h1>} />
            <Route path="/contacto" element={<h1>Contacto</h1>} />
          </Routes> */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}