import React from 'react';

const ClimaCard = ({ dadosCidade }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow w-full sm:w-[48%] lg:w-[24%]">
      <h3 className="font-semibold border-b border-gray-300 pb-1 mb-2">Clima</h3>
      {dadosCidade ? (
        <div className="text-sm space-y-1">
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
