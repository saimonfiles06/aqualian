import { useNavigate } from "react-router-dom";
import GradientWaves from "./GradientWaves";
import BlurText from "./BlurText";
import ShinyText from "./ShinyText";
import SpecularButton from "./SpecularButton";
import heroImg from "../assets/img/hero-piscina.jpg";
import "../css/Hero.css";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero__fondo" aria-hidden="true">
        <GradientWaves
          horizonColor="#0E5A8F"
          waveColor="#2FD0E8"
          crestColor="#B8F3FB"
          backgroundColor="#06172E"
        />
        <img className="hero__imagen" src={heroImg} alt="" loading="eager" />
        <div className="hero__velo" />
      </div>

      <div className="hero__contenido">
        <div className="hero__texto">
          <span className="hero__etiqueta">
            <span className="hero__punto" />
            <ShinyText
              text="Piscinas exclusivas"
              color="#7FE6F5"
              shineColor="#FFFFFF"
              speed={3}
            />
          </span>

          <h1 className="hero__titulo">
            <BlurText
              text="Diseñamos y construimos piscinas a medida"
              trigger="load"
              delay={120}
            />
          </h1>

          <p className="hero__subtitulo">
            Soluciones únicas para arquitectos, constructoras y profesionales del
            sector. Calidad, diseño y funcionalidad en cada proyecto.
          </p>

          <SpecularButton
            tint="#2FD0E8"
            tintOpacity={0.25}
            textColor="#FFFFFF"
            onClick={() => navigate("/proyectos")}
          >
            Ver nuestros proyectos →
          </SpecularButton>
        </div>
      </div>
    </section>
  );
}