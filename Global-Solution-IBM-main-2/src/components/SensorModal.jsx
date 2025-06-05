import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SensorModal = ({ sensor, onClose, onSave }) => {
  const [formData, setFormData] = useState({ ...sensor });
  const [medicao, setMedicao] = useState(null);
  const [umidade, setUmidade] = useState(null);

  useEffect(() => {
    const fetchMockApi = () => {
      setTimeout(() => {
        setMedicao(Math.floor(Math.random() * 100));
        setUmidade(Math.floor(Math.random() * 100));
      }, 500);
    };

    fetchMockApi();
  }, [sensor]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white w-full max-w-md p-6 rounded-2xl shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4 text-gray-800">🛠️ Editar Sensor</h2>
        

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome:</label>
            <input
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Cidade:</label>
            <input
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Status:</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Ativo</option>
              <option>Inativo</option>
              <option>Manutenção</option>
            </select>
          </div>

          <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-700">
            <p><strong>Última medição:</strong> {medicao !== null ? `${medicao}%` : 'Carregando...'}</p>
            <p><strong>Umidade atual:</strong> {umidade !== null ? `${umidade}%` : 'Carregando...'}</p>
          </div>
        </div>

        <div className="mt-5 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Salvar
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SensorModal;
