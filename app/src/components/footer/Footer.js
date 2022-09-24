import "./style.css";
import logo from "./images/logoIcon.svg";
import Ifood from "./images/ifood.svg";
import Instagram from "./images/instagram.svg";

export default function Footer() {
  return (
    <div className="bgWhite">
    <div className="containerFooter">
    <footer className="footer">


      <div className="logoFooter">
        <img src={logo} alt="logo" />
      </div>
      <div className="thirdPartFooterMobile">
        <img className="ifoodFooter" src={Ifood} alt="logo ifood" />
        <img className="instagramFooter" src={Instagram} alt="logo Instagram" />
      </div>
      <div className="iconsFooter">
        <a href="#home" className="itemsFooter">
          Home
        </a>
        <a href="#local" className="itemsFooter">
          Localização
        </a>
        <a href="#cardapio" className="itemsFooter">
          Cardapio
        </a>
        <a href="#about" className="itemsFooter">
          Sobre
        </a>
      </div>

      <div className="thirdPartFooter">
        <img className="ifoodFooter" src={Ifood} alt="logo ifood" />
        <img className="instagramFooter" src={Instagram} alt="logo Instagram" />
      </div>
    </footer>
    <p className="copyRights"><span>2022 &#169; EmpireBurger.</span> Todos os direitos reservados.</p>
    </div>
    </div>
  );
}