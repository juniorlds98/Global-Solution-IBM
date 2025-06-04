import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaConfirmacao from './TelaConfirmacao';
import TelaAgenda from './TelaAgenda';
import TelaCadastro from './TelaCadastro';
import TelaAdministrativo from './TelaAdministrativo';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaConfirmacao />} />
        <Route path="/tela-agenda" element={<TelaAgenda />} />
        <Route path="/tela-cadastro" element={<TelaCadastro />} />
        <Route path="/tela-administrativo" element={<TelaAdministrativo />} />
      </Routes>
    </BrowserRouter>
  );
}
