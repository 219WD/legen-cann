import React, { lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const HomeScreen = lazy(() => import('./pages/HomeScreen.jsx'));

function App() {
  return (
      <BrowserRouter>
        <Helmet>
          <title>LEGEN | Proyecto de Fitomejoramiento en Cannabis para Extracción de Aceite Medicinal</title>
          <link rel="icon" type="image/png" href="/legen-logo.png" />
          <meta
            name="description"
            content="LEGEN es un proyecto de fitomejoramiento en cannabis para la extracción de aceite medicinal, ubicado en Tafí Viejo, Tucumán. Desarrollamos soluciones innovadoras en genética y cultivo."
          />
          <meta
            name="keywords"
            content="Cannabis medicinal, Fitomejoramiento, Extracción de aceite, Genética de cannabis, Cultivo medicinal, Tucumán, Argentina"
          />
          <meta name="author" content="LEGEN - Fitomejoramiento en Cannabis" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "LEGEN",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Tafí Viejo",
                "addressLocality": "Tucumán",
                "addressRegion": "T",
                "postalCode": "4103",
                "addressCountry": "AR"
              },
              "telephone": "+549XXXXXXXXX",
              "description":
                "LEGEN es un innovador proyecto de fitomejoramiento en cannabis medicinal, especializado en la extracción de aceites terapéuticos y el desarrollo genético de cultivos sostenibles en Argentina.",
              "url": "https://legencannabis.org/"
            })}
          </script>
        </Helmet>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;