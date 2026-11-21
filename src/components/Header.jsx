import { Link, useLocation } from "react-router-dom";
import PillNav from "./PillNav";
import logo from "../assets/img/logo.png";

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
    <header
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
        padding: "24px clamp(20px, 5.5vw, 80px)",
      }}
    >
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
    </header>
  );
}