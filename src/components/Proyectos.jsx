import { Link } from "react-router-dom";
import TiltedCard from "./TiltedCard";
import "../css/Proyectos.css";

import proyecto1 from "../assets/img/proyecto-1.jpg";
import proyecto2 from "../assets/img/proyecto-2.jpg";
import proyecto3 from "../assets/img/proyecto-3.jpg";

const proyectos = [
  {
    img: proyecto1,
    alt: "Piscina de una vivienda unifamiliar",
    titulo: "Vivienda unifamiliar",
    lugar: "Valencia",
  },
  {
    img: proyecto2,
    alt: "Piscina de una reforma integral",
    titulo: "Reforma integral",
    lugar: "Alicante",
  },
  {
    img: proyecto3,
    alt: "Piscina diseñada para un proyecto de arquitectura",
    titulo: "Proyecto para arquitectos",
    lugar: "Castellón",
  },
];

export default function Proyectos() {
  return (
    <section className="proyectos">
      <div className="proyectos__interior">
        <div className="proyectos__info">
          <span className="proyectos__etiqueta">Nuestros proyectos</span>
          <h2 className="proyectos__titulo">Piscinas que inspiran</h2>
          <p className="proyectos__texto">
            Descubre algunos de nuestros trabajos y encuentra la inspiración
            para tu próximo proyecto.
          </p>
          <Link to="/proyectos" className="proyectos__boton">
            Ver todos los proyectos <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="proyectos__rejilla">
          {proyectos.map((p) => (
            <TiltedCard
              key={p.titulo}
              imageSrc={p.img}
              altText={p.alt}
              containerHeight="360px"
              containerWidth="100%"
              imageHeight="360px"
              imageWidth="100%"
              radius={24}
              rotateAmplitude={10}
              scaleOnHover={1.04}
              showTooltip={false}
              displayOverlayContent
              overlayContent={
                <div className="proyectos__pie">
                  <h3>{p.titulo}</h3>
                  <span>{p.lugar}</span>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}