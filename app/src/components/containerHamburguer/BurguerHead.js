import React from "react";
import kingBurguer from "../../components/navbar/images/kingburguer.svg";

export default function BurguerHead() {
  return (
    <div className="heading">
      <p className="title">Uma nova experiência!</p>
      <img className="biggerTitle" src={kingBurguer} alt="king burguer" />
      <p className="subtitle">
        Para quem tem um <span className="text">Apetite de um REI!</span>
      </p>
      <button className="buyButton">Comprar Agora</button>
    </div>
  );
}
