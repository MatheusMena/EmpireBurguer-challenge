import burguerIcon from "../../components/navbar/images/burguerIcon.svg";
import fone from "../../components/navbar/images/fone.svg";
import delivery from "../../components/navbar/images/delivery.svg";

export default function ExtraInfo() {
  return (
    <div>
      <div className="extraInfo">
        <div className="icons">
          <img
            src={burguerIcon}
            alt="burguer icon"
            width={60}
            id="burg"
            className="iconImg"
          />
          <div className="iconDisplay">
            <p className="iconTitle">Artesanal</p>
            <p className="iconInfo">
              Nossas receitas são
              <br />
              feitas com todo cuidado
            </p>
          </div>
        </div>

        <div className="icons">
          <img src={fone} alt="fone icon" width={60} className="iconImg" />
          <div className="iconDisplay">
            <p className="iconTitle">Atendimento</p>
            <p className="iconInfo">
              Totalmenteo
              <br />
              Personalizado
            </p>
          </div>
        </div>

        <div className="icons">
          <img
            src={delivery}
            alt="delivery icon"
            width={60}
            className="iconImg"
          />
          <div className="iconDisplay" id="deliverySpeed">
            <p className="iconTitle">Delivery Speed</p>
            <p className="iconInfo">
              Entregamos em menos de
              <br />
              45 minutos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
