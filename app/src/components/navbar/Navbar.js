import React, { useState } from "react";
import "./style.css";
import logo from "./images/empire.svg";
import Ifood from "./images/ifood.svg";
import Instagram from "./images/instagram.svg";
import Contato from "./images/contato.svg";
import MenuIcon from "./images/menuIcon.svg";

export default function Navbar() {
  const [button, setButton] = useState(false);
  function toogleMenu() {
    console.log(button);
    setButton(!button);
  }
  return (
    <div>
            <button className="buttonIcon" onClick={() => toogleMenu()}>
              <img className="iconMenu" src={MenuIcon} alt="" />
            </button>
      {button ? (
        <div className="mobileMenu">
          <div className="iconsNav">
           
            <a href="#home" className="itemsMobile home">
              Home
            </a>
            <a href="#ofertas" className="itemsMobile promo">
              Promoção
            </a>
            <a href="#cardapio" className="itemsMobile cardapio">
              Cardapio
            </a>
            <a href="#comentario" className="itemsMobile comentario">
              Comentario
            </a>
            <a href="#contato" className="itemsMobile contato">
              Contato
            </a>
          </div>
        </div>
      ) : (
        <nav className="navbar">
          <div className="alignThirdPart">
            <div className="alignNav">
              <img className="logo" src={logo} alt="logo" />
              <div className="iconsNav">
                <a href="#home" className="items home">
                  Home
                </a>
                <a href="#ofertas" className="items promo">
                  Promoção
                </a>
                <a href="#cardapio" className="items cardapio">
                  Cardapio
                </a>
                <a href="#clientes" className="items comentario">
                  Comentario
                </a>
                <a href="#contato" className="items contato">
                  Contato
                </a>
              </div>
            </div>

            <div className="thirdPart">
              <img className="ifood" src={Ifood} alt="logo ifood" />
              <img className="instagram" src={Instagram} alt="logo Instagram" />
              <img className="telefone" src={Contato} alt="logo telefone" />
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
