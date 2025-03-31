import React, { useEffect, useRef } from "react";
import Logo from "../assets/Logo.svg";
import "./css/Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Player from "@vimeo/player";

const Hero = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const player = new Player(iframeRef.current);

      player.setVolume(0); // Silenciar el video
      player.play().catch(() => {
        console.warn("El autoplay fue bloqueado por el navegador");

        // Agregar un evento de clic para iniciar el video manualmente
        document.addEventListener("click", () => {
          player.play();
        }, { once: true });
      });
    }
  }, []);

  return (
    <div className="container hero" id="hero">
      <iframe
        ref={iframeRef}
        src="https://player.vimeo.com/video/1071073420?h=a142ee0cf0&autoplay=1&muted=1&background=1"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="1"
        className="video-bg"
      ></iframe>

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
          <h2>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Tafí Viejo - Tucumán
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
