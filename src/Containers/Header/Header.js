import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import "./header.scss";
import logo from "../../images/logo.png";
import FormularioAtividade from "../Formulario/index";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pontos, setPontos] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} className="logo" />
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="/">Boas-Vindas</a>
          </li>
          <li>
            <a href="form">Adicionar Lista</a>
          </li>
          <li>
            <a href="atividades">Listar Tarefas</a>
          </li>
        </ul>
        <span>Pontos: {pontos}</span>
      </nav>
    </div>
  );
}
