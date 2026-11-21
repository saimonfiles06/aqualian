import Noise from "./Noise";
import GlassIcons from "./GlassIcons";
import logo from "../assets/img/logo_texto_fondo_azul.ico";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Footer.css";

const redes = [
  {
    icon: <i className="bi bi-instagram" />,
    label: "Instagram Aqualian Piscinas",
    href: "https://www.instagram.com/aqualianpiscinas/",
    target: "_blank",
    color: "teal",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <Noise opacity={0.14} fps={12} />

      <div className="footer__container">
        <img className="footer__logo" src={logo} alt="Aqualian Piscinas" />

        <div className="footer__contact">
          <span className="footer__item">
            <i className="bi bi-geo-alt-fill" aria-hidden="true" />
            Burjassot, Valencia
          </span>
          <a className="footer__item" href="mailto:info@aqualian.com">
            <i className="bi bi-envelope-fill" aria-hidden="true" />
            info@aqualian.com
          </a>
        </div>

        <GlassIcons items={redes} columns={1} size={48} labels="none" />
      </div>
    </footer>
  );
}