import React, { useState, useEffect } from 'react';

const ClimaCard = ({ dadosCidade }) => {
  const [width, setWidth] = useState('25%');

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setWidth('100%'); // celular
      } else if (window.innerWidth < 1024) {
        setWidth('48%'); // tablet
      } else {
        setWidth('24%'); // desktop
      }
    };

    updateWidth();

    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div
      className="bg-white p-4 rounded-xl shadow w-full sm:w-[48%] lg:w-[24%] min-w-[200px] flex flex-col"
      style={{ height: '300px', width, overflowY: "auto" }}
    >
      <h3 className="font-semibold border-b border-gray-300 pb-1 mb-2 flex-shrink-0">Clima</h3>
      {dadosCidade ? (
        <div className="text-sm space-y-1 overflow-y-auto" style={{ flexGrow: 1 }}>
          <p><strong>Cidade:</strong> {dadosCidade.cidade}</p>
          <p><strong>Estado:</strong> {dadosCidade.estado}</p>
          <p><strong>Data:</strong> {dadosCidade.data}</p>
          <p><strong>Tempo:</strong> {dadosCidade.tempo.toUpperCase()}</p>
          <p><strong>Mínima:</strong> {dadosCidade.min}°C</p>
          <p><strong>Máxima:</strong> {dadosCidade.max}°C</p>
          <p><strong>Índice UV:</strong> {dadosCidade.iuv}</p>
        </div>
      ) : (
        <p className="text-gray-400">Carregando dados do clima...</p>
      )}
    </div>
  );
};

export default ClimaCard;

