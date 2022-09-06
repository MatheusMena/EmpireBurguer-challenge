import React from 'react'
import "./style.css"
import logo from'./images/empire.png'
import Ifood from'./images/ifood.svg'
import Instagram from'./images/instagram.svg'
import Contato from'./images/contato.svg'

export default function Navbar() {
  return (
    <div className='navbar'>
      <img className="logo" src={logo} alt="logo"/>
      <div className='items home'>Home</div>
      <div className='items promo'>Promoção</div>
      <div className='items cardapio'>Cardapio</div>
      <div className='items comentario'>Comentario</div>
      <div className='items contato'>Contato</div>
      <img className="ifood" src={Ifood} alt="logo ifood"/>
      <img className="instagram" src={Instagram} alt="logo Instagram"/>
      <div className="barra"/>
      <img className="contato" src={Contato} alt="logo Contato"/>
      </div>
 )
}
