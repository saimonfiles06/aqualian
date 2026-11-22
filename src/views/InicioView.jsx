import Header from "../components/Header";
import Hero from "../components/Hero";
import Ventajas from "../components/Ventajas";
import Proyectos from "../components/Proyectos";
import CtaContacto from "../components/CtaContacto";
import Footer from "../components/Footer";

export default function InicioView() {
  return (
    <div className="pagina">
      <Header />
      <main className="pagina__contenido">
        <Hero />
        <Ventajas />
        <Proyectos />
        <CtaContacto />
      </main>
      <Footer />
    </div>
  );
}
