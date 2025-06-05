import React from 'react';

const StatusSensorCard = ({ sensor }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow w-full sm:w-[48%] lg:w-[24%]">
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