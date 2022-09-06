import React from 'react'
import "./style.css"
import logo from'./empire.png'
export default function Navbar() {
  return (
    <div className='navbar'>
      <img className="logo" src={logo} alt="logo"/>
      <div className='items home'>Home</div>
      <div className='items promo'>Promoção</div>
      <div className='items cardapio'>Cardapio</div>
      <div className='items comentario'>Comentario</div>
      <div className='items contato'>Contato</div>
      </div>
 )
}
