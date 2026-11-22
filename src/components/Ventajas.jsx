import MagicBento from "./MagicBento";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Ventajas.css";

const items = [
  {
    id: "diseno",
    icon: <i className="bi bi-vector-pen" />,
    label: "Diseño",
    title: "Diseño personalizado",
    description: "Cada proyecto es único, adaptado a tus necesidades y espacio.",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: "materiales",
    icon: <i className="bi bi-shield-check" />,
    title: "Materiales de alta calidad",
    description: "Trabajamos con los mejores materiales del mercado.",
  },
  {
    id: "equipo",
    icon: <i className="bi bi-cone-striped" />,
    title: "Equipo especializado",
    description: "Profesionales con amplia experiencia en el sector.",
  },
  {
    id: "integral",
    icon: <i className="bi bi-tools" />,
    label: "Todo el proceso",
    title: "Servicio integral",
    description:
      "Desde el diseño hasta el mantenimiento, te acompañamos en todo el proceso.",
    colSpan: 3,
  },
];

export default function Ventajas() {
  return (
    <section className="ventajas">
      <div className="ventajas__interior">
        <span className="ventajas__etiqueta">Por qué Aqualian</span>
        <h2 className="ventajas__titulo">Todo lo que necesitas, en un solo equipo</h2>

        <MagicBento
          items={items}
          columns={3}
          rowHeight={170}
          gap={16}
          radius={24}
          theme="light"
          glowColor="#2FD0E8"
          enableSpotlight
          enableBorderGlow
          enableStars={false}
          enableTilt={false}
        />
      </div>
    </section>
  );
}