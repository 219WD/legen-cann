import React from 'react'
import Cogollo from '../assets/Cogollo.webp'
import './css/About.css'

const About = () => {
    return (
        <div className='container about'>
            <img src={Cogollo} alt="Cogollo" />
            <div className="texto">
                <h2>¿Quiénes somos?</h2>
                <p>
                    <span>Legen</span>, es una empresa comprometida con la <span>excelencia</span>, la <span>innovación</span> y el <span>impacto positivo en la comunidad</span>. Con un enfoque centrado en la calidad, la ciencia y el <span>cuidado de las personas</span>, y con la idea de seguir avanzando en el campo del cannabis medicinal y llevar <span>soluciones terapéutica</span>s efectivas a quienes <span>las necesitan</span>.
                    Nuestro nombre refleja <span>nuestra pasión</span> y nuestra misión: <span>"Le" de "leemon"</span> en inglés, haciendo referencia al <span>terpeno limoneno</span> presente en el cannabis, y <span>"gen" por genética</span>.
                </p>
            </div>
        </div>
    )
}

export default About