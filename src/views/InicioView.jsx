import Header from "../components/Header";
import Hero from "../components/Hero"
import Footer from "../components/Footer";

export default function InicioView() {
  return (
    <div className="pagina">
      <Header />
      <main className="pagina__contenido">
        {/* Aquí irán Hero, Ventajas, ProyectosDestacados y CtaContacto */}
        <Hero />
      </main>
      <Footer />
    </div>
  );
}