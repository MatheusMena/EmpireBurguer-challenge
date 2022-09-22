import React from "react";
import "./style.css";
import oferta1 from "./ofertas/oferta-1.png";
import oferta2 from "./ofertas/oferta-2.png";
import oferta3 from "./ofertas/oferta-3.png";


export default function Ofertas() {
  return (
    <div id="ofertas" className="containerOferta">
      <div className="um">
        Ofertas especiais
        <p>
          Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque
          sempre estamos mudando o nosso cardapio.
        </p>
      </div>
      <div className="dois">
        <img src={oferta1} alt="" />
      </div>
      <div className="tres">
        <img src={oferta2} alt="" />
      </div>
      <div className="quatro">
        <img src={oferta3} alt="" />
      </div>
    </div>
  );
}
