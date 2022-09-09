import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./style.css"
import kingBurguer from "../../components/navbar/images/kingburguer.svg"
import burguerIcon from "../../components/navbar/images/burguerIcon.svg"
import fone from "../../components/navbar/images/fone.svg"
import delivery from "../../components/navbar/images/delivery.svg"

export default function Menu() {
  return (
    <div className="menu">
    <Navbar />
    <p className="title">Uma nova experiência!</p>
    <img  className="biggerTitle" src={kingBurguer} alt="king burguer"/>
    <p className="subtitle">Para quem tem um <span className='text'>Apetite de um REI!</span></p>
    <button className="buyButton">Comprar Agora</button>
    <div className='extraInfo'>

      <div className="icons"> 
        <img src={burguerIcon} alt="burguer icon" width={60} id='burg' className='iconImg'/>
        <div className="iconDisplay">
          <p className='iconTitle'>Artesanal</p>
          <p className='iconInfo'>Nossas receitas são<br/>feitas com todo cuidado</p>
        </div>
        </div>

      <div className="icons">

      <img src={fone} alt="fone icon" width={60} className='iconImg'/>
      <div className="iconDisplay">
      <p className='iconTitle'>Atendimento</p>
      <p className='iconInfo'>Totalmenteo<br/>Personalizado</p>
      </div>
    </div>
        
      <div className="icons">
      <img src={delivery} alt="delivery icon" width={60} className='iconImg'/>
<div className="iconDisplay" id='deliverySpeed'>
  <p className='iconTitle'>Delivery Speed</p>
  <p className='iconInfo'>Entregamos em menos de<br/>45 minutos</p>
</div>
      </div>
    </div>
    </div>
  )
}
