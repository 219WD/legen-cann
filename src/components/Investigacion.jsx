import React from 'react'
import Senasa from '../assets/conicet.png'
import Inase from '../assets/inase.svg'
import Unt from '../assets/unt.svg'
import './css/Investigacion.css'

const Investigacion = () => {
    return (
        <div className='container investigacion'>
            <div className="logos">
                <h3>Investigación</h3>
                <div className="imagenes">
                    <img src={Senasa} alt="" />
                    <img src={Inase} alt="" />
                    <img src={Unt} alt="" />
                </div>
            </div>
            <div className="parrafo">
                <h3>Fitomejoramiento <br />
                en Cannabis Medicinal</h3>
                <p>En LeGen, nos diferenciamos al enfocarnos en la genética de variedades cítricas de cannabis, utilizando métodos de fitomejoramiento avanzados para desarrollar cepas con perfiles de sabor y aroma que evocan los cítricos frescos y vibrantes que han caracterizado a Tafí Viejo durante generaciones.</p>
            </div>
        </div>
    )
}

export default Investigacion