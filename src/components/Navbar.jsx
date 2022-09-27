import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import ViveColegio from "../assets/img/ViveColegio.png";
import styled from "styled-components";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);
  return (
    <div className="header">
      <nav className="navbar">
        <Link
          to="inicio"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="logo"
        >
          <img src={ViveColegio} alt="Logo" />
        </Link>
        <div className="hamburguer" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="inicio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="cuidadoDeSi"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Cuidado de si
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="manejoEmociones"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Manejo de emociones
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="generandoVinculos"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Generando vínculos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
