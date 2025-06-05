import React, { useState, useEffect } from 'react';

const StatusSensorCard = ({ sensor }) => {
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

    updateWidth(); // valor inicial
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div
      className="bg-white p-4 rounded-xl shadow w-full sm:w-[48%] lg:w-[24%] min-w-[200px]"
      style={{ height: '300px', width }}
    >
      <h3 className="font-semibold border-b border-gray-300 pb-1 mb-2">Status do Sensor</h3>
      {sensor ? (
        <>
          <p><strong>Cidade:</strong> {sensor.cidade}</p>
          <p><strong>Nível da água:</strong> {sensor.nivel_da_agua}%</p>
          <p><strong>Status:</strong> {sensor.status}</p>
          <p><strong>Resultado:</strong> {sensor.resultado}</p>
        </>
      ) : (
        <p className="text-gray-400">Carregando dados do sensor...</p>
      )}
    </div>
  );
};

export default StatusSensorCard;
