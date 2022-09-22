import React from "react";
import timeIcon from "../../pages/ofertas/ofertas/timeIcon.svg";
import "../atendimento/style.css";

export default function Atendimento() {
  return (
    <div className="containerAtend">
      <div className="func">
        <div className="timeIcon">
          <img src={timeIcon} alt="" />
        </div>
        <div className="funcionamento">
          Horario de funcionamento
          <div className="diasFuncionamento">
            Segunda-feira a sexta-feira: 17h00 - 23h00
          </div>
          <div className="diasFuncionamento">
            Sabado a Domíngo: 18h00 - 23h00
          </div>
        </div>
        </div>
        <div className="aditionalInfo">
          Não esqueça de marcar a gente no Instagram:
          <br />
          <span className="hashEmpire">#Empire Burguer</span>
        </div>
    </div>
  );
}
