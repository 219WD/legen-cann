import React from 'react'
import Logo from '../assets/Logo.svg'
import './css/Hero.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";


const Hero = () => {
  return (
    <div className='container hero' id='hero'>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="titulo">
        <h1>
          Fitomejoramiento
          <br />
          en Cannabis Medicinal
        </h1>
        <div className="subtitulo">
          <h2><FontAwesomeIcon icon={faMapMarkerAlt} /> Tafí Viejo - Tucumán</h2>
        </div>
      </div>
    </div>
  )
}

export default Hero