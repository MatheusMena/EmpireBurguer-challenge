import React from "react";
import "./style.css";
import logo from "./images/empire.svg";
import Ifood from "./images/ifood.svg";
import Instagram from "./images/instagram.svg";
import Contato from "./images/contato.svg";
import MenuIcon from "./images/menuIcon.svg";

export default function Navbar() {
  return (
    <div>
      
      <nav className="navbar">
       <div className="alignNav">
         <img className="logo" src={logo} alt="logo" />  
      
         <div className="iconsNav">
          <a href="#home" className="items home">
            Home
          </a>
          <a href="#promos"className="items promo">
            Promoção
          </a>
            <a href="#ofertas" className="items cardapio">
             Cardapio 
            </a> 
          <a href="#clientes"className="items comentario">
            Comentario
          </a>
          <a href="#contato"className="items contato">
            Contato
          </a>
        </div>
     
       </div>
        

        {/* <div className="menu-icon">
          <button className="buttonIcon">
            <img className="iconMenu" src={MenuIcon} alt="" />
          </button>
        </div> */}
        
        <div className="thirdPart">
          <img className="ifood" src={Ifood} alt="logo ifood" />
          <img className="instagram" src={Instagram} alt="logo Instagram" />
          <div className="barra" />
          <img className="telefone" src={Contato} alt="logo telefone" />
        </div>
      </nav>
      <div className="mobileMenu">
        <div className="iconsNav">
          <button href="#home" className="items home">
            Home
          </button>
          <button href="#home" className="items promo">
            Promoção
          </button>
          <button href="#home" className="items cardapio">
            Cardapio
          </button>
          <button href="#home" className="items comentario">
            Comentario
          </button>
          <button type="button" className="items contato">
            Contato
          </button>
        </div>
      </div>
    </div>
  );
}
