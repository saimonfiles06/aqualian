import { Link, useLocation } from "react-router-dom";
import PillNav from "./PillNav";
import logo from "../assets/img/logo.png";
import '../css/Header.css';
const items = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

// Pill Nav usa href; React Router usa "to". Este puente evita recargar la página.
function RouterLink({ href, ...props }) {
  return <Link to={href} {...props} />;
}

export default function Header() {
  const { pathname } = useLocation();

    return (
    <header className="header">
      <div className="header__nav">
        <PillNav
          logo={logo}
          logoAlt="Aqualian Piscinas"
          logoHref="/"
          items={items}
          activeHref={pathname}
          linkComponent={RouterLink}
          theme="dark"
          barColor="rgba(255, 255, 255, 0.10)"
          textColor="#FFFFFF"
          highlightColor="#2FD0E8"
          highlightTextColor="#06172E"
          indicator="pill"
          style={{ "--pn-mark": "34px" }}
        />
      </div>

      <Link to="/contacto" className="header__cta">
        Solicita tu proyecto →
      </Link>
    </header>
  );
}
