import React from 'react'
import './style.css'

export default function GoogleMaps() {
  return (
    <div>
        <div className='titleMap'>
            <div className='local'> Onde fica o nosso castelo</div>
        <p className='subtitleMap'>Estaremos de portas abertas para a nossa realeza.</p>
        </div>
        <iframe 
        className='maps'
        title='unique' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27374.4813914862!2d-61.56912665692972!3d-30.947865764198642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94354500086f5fa7%3A0x90e2686348378f7b!2sSunchales%2C%20Santa%20F%C3%A9%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1663799787683!5m2!1spt-BR!2sbr" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
