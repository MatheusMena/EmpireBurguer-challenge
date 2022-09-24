import React from "react";
import "./style.css";
import oferta1 from "./ofertas/oferta-1.png";
import oferta2 from "./ofertas/oferta-2.png";
import oferta3 from "./ofertas/oferta-3.png";


export default function Ofertas() {
  return (
    <div id="ofertas" className="containerOferta">
      <div className="um">
        OFERTAS ESPECIAIS
        <p>
          Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque
          sempre estamos mudando o nosso cardapio.
        </p>
      </div>
      <div className="dois">
        <img src={oferta1} alt="" />
        <p className="textOferta1">Burger imperial+batata</p>
        <p className="textOferta1Mobile">BURGUER PRIME+BATATA</p>
        <p className="textOferta1Price">250kg</p>
        <p className="apenas">Apenas</p>
        <p className="hoje">HOJE</p>
      </div>
      <div className="tres">
        <img src={oferta2} alt="" />
        <p className="textOferta2 textOfertaStyle">batata</p>
        <p className="textOfertaPriceStyle">150kg</p>
      </div>
      <div className="quatro">
        <img src={oferta3} alt="" />
        <p className="textOferta3 textOfertaStyle">Sorvete</p>
        <p className="textOfertaPriceStyle ">50kg</p>
      </div>
    </div>
  );
}
