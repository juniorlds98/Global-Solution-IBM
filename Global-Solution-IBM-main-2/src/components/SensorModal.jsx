import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SensorModal = ({ sensor, onClose, onSave }) => {
  const [formData, setFormData] = useState({ ...sensor });
  const [medicao, setMedicao] = useState(null);
  const [umidade, setUmidade] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchMockApi = () => {
      setTimeout(() => {
        setMedicao(Math.floor(Math.random() * 100));
        setUmidade(Math.floor(Math.random() * 100));
      }, 500);
    };
    fetchMockApi();
  }, [sensor]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };


  const [inputFocus, setInputFocus] = useState({ nome: false, cidade: false, status: false });
  const [cancelHover, setCancelHover] = useState(false);
  const [saveHover, setSaveHover] = useState(false);
  const [closeHover, setCloseHover] = useState(false);

  // Responsividade
  const modalMaxWidth = windowWidth < 400 ? '90vw' : windowWidth < 600 ? '400px' : '480px';
  const modalPadding = windowWidth < 400 ? '20px' : '32px';

  // Estilos
  const backdropStyle = {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 50,
    padding: '12px', 
  };

  const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: '24px',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
    width: '100%',
    maxWidth: modalMaxWidth,
    padding: modalPadding,
    position: 'relative',
    maxHeight: '90vh',
    overflowY: 'auto',
    boxSizing: 'border-box',
  };

  const closeBtnStyle = {
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: 'transparent',
    border: 'none',
    fontSize: '28px',
    color: closeHover ? '#444' : '#888',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '24px',
    color: '#111',
    userSelect: 'none',
    textAlign: 'center',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  };

  const labelStyle = {
    fontSize: '14px',
    fontWeight: '500',
    color: '#555',
    marginBottom: '6px',
    display: 'block',
  };

  const inputBaseStyle = {
    width: '100%',
    padding: '12px 16px',
    fontSize: '14px',
    borderRadius: '16px',
    border: '1.5px solid #ccc',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxSizing: 'border-box',
  };

  const inputFocusStyle = {
    borderColor: '#3b82f6',
    boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)',
  };

  const selectStyle = {
    ...inputBaseStyle,
    appearance: 'none',
    cursor: 'pointer',
  };

  const infoBoxStyle = {
    backgroundColor: '#f3f4f6',
    borderRadius: '16px',
    padding: '16px',
    fontSize: '14px',
    color: '#444',
    lineHeight: '1.4',
  };

  const buttonsContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '16px',
    marginTop: '24px',
    flexWrap: 'wrap',
  };

  const btnBaseStyle = {
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '16px',
    border: 'none',
    cursor: 'pointer',
    flex: windowWidth < 400 ? '1 1 100%' : 'auto', 
  };

  const btnCancelStyle = {
    ...btnBaseStyle,
    color: '#555',
    backgroundColor: cancelHover ? '#d1d5db' : '#e5e7eb',
  };

  const btnSaveStyle = {
    ...btnBaseStyle,
    color: 'white',
    backgroundColor: saveHover ? '#1e40af' : '#2563eb',
  };

  return (
    <div style={backdropStyle}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -30 }}
        transition={{ duration: 0.25 }}
        style={modalStyle}
      >
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          style={closeBtnStyle}
          onMouseEnter={() => setCloseHover(true)}
          onMouseLeave={() => setCloseHover(false)}
          type="button"
        >
          &times;
        </button>

        <h2 style={titleStyle}>🛠️ Editar Sensor</h2>

        <form style={formStyle} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome" style={labelStyle}>Nome</label>
            <input
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              onFocus={() => setInputFocus(prev => ({ ...prev, nome: true }))}
              onBlur={() => setInputFocus(prev => ({ ...prev, nome: false }))}
              style={inputFocus.nome ? { ...inputBaseStyle, ...inputFocusStyle } : inputBaseStyle}
              placeholder="Nome do sensor"
              required
              type="text"
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="cidade" style={labelStyle}>Cidade</label>
            <input
              id="cidade"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
              onFocus={() => setInputFocus(prev => ({ ...prev, cidade: true }))}
              onBlur={() => setInputFocus(prev => ({ ...prev, cidade: false }))}
              style={inputFocus.cidade ? { ...inputBaseStyle, ...inputFocusStyle } : inputBaseStyle}
              placeholder="Cidade do sensor"
              required
              type="text"
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="status" style={labelStyle}>Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              onFocus={() => setInputFocus(prev => ({ ...prev, status: true }))}
              onBlur={() => setInputFocus(prev => ({ ...prev, status: false }))}
              style={inputFocus.status ? { ...selectStyle, ...inputFocusStyle } : selectStyle}
              required
            >
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
              <option value="Manutenção">Manutenção</option>
            </select>
          </div>

          <div style={infoBoxStyle}>
            <p><strong>Última medição:</strong> {medicao !== null ? `${medicao}%` : 'Carregando...'}</p>
            <p><strong>Umidade atual:</strong> {umidade !== null ? `${umidade}%` : 'Carregando...'}</p>
          </div>

          <div style={buttonsContainerStyle}>
            <button
              type="button"
              onClick={onClose}
              style={btnCancelStyle}
              onMouseEnter={() => setCancelHover(true)}
              onMouseLeave={() => setCancelHover(false)}
            >
              Cancelar
            </button>
            <button
              type="submit"
              style={btnSaveStyle}
              onMouseEnter={() => setSaveHover(true)}
              onMouseLeave={() => setSaveHover(false)}
            >
              Salvar
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SensorModal;
