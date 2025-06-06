import React, { useState } from 'react';
import SensorModal from './SensorModal';
import Header from './Header'

//Dados mocados para o Caio
const mockSensores = [
  {
    id: 1,
    nome: 'Sensor A',
    nivelRio: 65,
    diasOnline: 12,
    cidade: 'São Paulo',
    status: 'Ativo',
  },
  {
    id: 2,
    nome: 'Sensor B',
    nivelRio: 32,
    diasOnline: 45,
    cidade: 'Campinas',
    status: 'Ativo',
  },
  {
    id: 3,
    nome: 'Sensor C',
    nivelRio: 85,
    diasOnline: 3,
    cidade: 'Santos',
    status: 'Inativo',
  },
];

const SensorList = () => {
  const [sensores, setSensores] = useState(mockSensores);
  const [sensorSelecionado, setSensorSelecionado] = useState(null);

  const handleOpenModal = (sensor) => {
    setSensorSelecionado(sensor);
  };

  const handleSave = (dadosEditados) => {
    setSensores(prev =>
      prev.map(sensor => (sensor.id === dadosEditados.id ? dadosEditados : sensor))
    );
    setSensorSelecionado(null);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
        <Header/>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Lista de Sensores e Nível de Rio</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sensores.map(sensor => (
          <div
            key={sensor.id}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition duration-300 cursor-pointer border-l-4
            border-blue-500 hover:border-blue-600"
            onClick={() => handleOpenModal(sensor)}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-gray-800">{sensor.nome}</h3>
              <span
                className={`text-sm font-semibold px-2 py-1 rounded-full 
                ${sensor.status === 'Ativo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
              >
                {sensor.status}
              </span>
            </div>
            <div className="mt-4 space-y-2 text-gray-700">
              <p><span className="font-medium">📍 Cidade:</span> {sensor.cidade}</p>
              <p><span className="font-medium">💧 Nível do rio:</span> {sensor.nivelRio}%</p>
              <p><span className="font-medium">⏱️ Dias online:</span> {sensor.diasOnline}</p>
            </div>
          </div>
        ))}
      </div>

      {sensorSelecionado && (
        <SensorModal
          sensor={sensorSelecionado}
          onClose={() => setSensorSelecionado(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default SensorList;
