import { Link } from "react-router-dom";
import StarBorder from "./StarBorder";
import Magnet from "./Magnet";
import "../css/CtaContacto.css";

export default function CtaContacto() {
  return (
    <section className="cta">
      <div className="cta__interior">
        <span className="cta__etiqueta">Hablemos</span>
        <h2 className="cta__titulo">¿Listo para tener la piscina que imaginas?</h2>
        <p className="cta__texto">
          Cuéntanos tu idea y te acompañamos desde el diseño hasta el mantenimiento.
        </p>

        <Magnet padding={120} magnetStrength={3}>
          <StarBorder
            as={Link}
            to="/contacto"
            theme="dark"
            color="#2FD0E8"
            backgroundColor="#06172E"
            textColor="#FFFFFF"
            borderColor="rgba(255, 255, 255, 0.18)"
            radius={999}
            duration={5}
            thickness={1.5}
            glow={0.7}
            className="cta__boton"
          >
            Solicita tu proyecto →
          </StarBorder>
        </Magnet>
      </div>
    </section>
  );
}