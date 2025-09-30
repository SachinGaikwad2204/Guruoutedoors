import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

const clientLogos = [
  { src: '/uploads/client-ira-epc.png', alt: 'Ira EPC' },
  { src: '/uploads/client-malabar.png', alt: 'Malabar Gold & Diamonds' },
  { src: '/uploads/client-mankind.png', alt: 'Mankind Agritech' },
  { src: '/uploads/client-mcf.png', alt: 'MCF' },
  { src: '/uploads/client-nacl.png', alt: 'NACL Industries Limited' },
  { src: '/uploads/client-nirmal.png', alt: 'Nirmal Seeds' },
];

const ClientSlideshow = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % clientLogos.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="client-slideshow">
      <div className="client-logos">
        {clientLogos.map((logo, idx) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className={`client-logo${idx === current ? ' active' : ''}`}
            style={{ opacity: idx === current ? 1 : 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientSlideshow;
