import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Player from "@vimeo/player";
import "./css/MisionVision.css";
import IsoLogo from "../assets/IsoLogo.svg";

const slides = [
  {
    title: "Nuestra Misión",
    text: "En Legen, nos esforzamos por mejorar la calidad de vida de las personas a través de la investigación, la tecnología y el desarrollo de cepas de cannabis medicinales de alta calidad. Creemos en el poder del cannabis para ofrecer soluciones terapéuticas efectivas y estamos comprometidos a llevar lo mejor de la ciencia y la naturaleza a nuestros clientes.",
  },
  {
    title: "Nuestro Enfoque",
    text: "Investigación y Desarrollo En Legen, invertimos en investigación y desarrollo para identificar y desarrollar cepas de cannabis con perfiles genéticos y químicos óptimos para el tratamiento de diversas condiciones médicas.",
  },
  {
    title: "Calidad y Consistencia",
    text: "Nos comprometemos a ofrecer productos de la más alta calidad y consistencia, utilizando prácticas agrícolas sostenibles y tecnología de vanguardia en todas nuestras operaciones.",
  },
  {
    title: "Educación y Conciencia",
    text: "Creemos en la importancia de educar a nuestra comunidad sobre los beneficios y el uso responsable del cannabis medicinal, promoviendo un enfoque basado en la evidencia y el respeto por la planta.",
  },
  {
    title: "Nuestro Equipo",
    text: "Contamos con un equipo diverso y multidisciplinario de profesionales apasionados por su trabajo. Desde técnicos agrícolas hasta expertos en genética y producción, cada miembro de nuestro equipo aporta su experiencia única para lograr nuestra misión compartida de mejorar la vida de las personas a través del cannabis medicinal.",
  },
];

const MisionVision = () => {
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (videoRef.current) {
      const vimeoPlayer = new Player(videoRef.current, { autoplay: false });
      setPlayer(vimeoPlayer);
    }

    startAutoSlide();

    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      changeSlide((index + 1) % slides.length);
    }, 5000);
  };

  const changeSlide = (newIndex) => {
    gsap.to(textRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.5,
      onComplete: () => {
        setIndex(newIndex);
        gsap.fromTo(textRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.5 });
      },
    });
  };

  const nextSlide = () => {
    clearInterval(intervalRef.current);
    changeSlide((index + 1) % slides.length);
  };

  const prevSlide = () => {
    clearInterval(intervalRef.current);
    changeSlide((index - 1 + slides.length) % slides.length);
  };

  const playVideo = () => {
    if (player) {
      player.play();
    }
  };

  return (
    <div className="container mision-vision" id="nuestro-enfoque">
      {/* Slider con GSAP */}
      <div className="text-slider">
        <button className="arrow prev" onClick={prevSlide}>
          &#10094;
        </button>
        <div ref={textRef} key={index}>
          <h2>{slides[index].title}</h2>
          <hr />
          <p>{slides[index].text}</p>
        </div>
        <button className="arrow next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="logoGreen">
        <img src={IsoLogo} alt="Logo" className="IsoLogo" />
      </div>

      {/* Video con reproducción manual */}
      <div className="video-container" onClick={playVideo}>
        <iframe
          ref={videoRef}
          src="https://player.vimeo.com/video/1059738776?h=3fc5ac0fb7&badge=0&autopause=0&player_id=0&app_id=58479"
          frameBorder="0"
          allow="fullscreen; encrypted-media"
          className="video-iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default MisionVision;
