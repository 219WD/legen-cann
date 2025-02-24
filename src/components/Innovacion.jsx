import React from 'react'
import LogoLargo from '../assets/IsoMasLegen.svg'
import './css/Innovacion.css'

const Innovacion = () => {
    return (
        <div className='container innovacion'>
            <div className="LogoInnova">
                <img src={LogoLargo} alt="" className='LogoLargo' />
                <h3>
                    Innovación y calidad al servicio
                    <br />
                    <span>del cannabis medicinal</span>
                </h3>
            </div>
        </div>
    )
}

export default Innovacion