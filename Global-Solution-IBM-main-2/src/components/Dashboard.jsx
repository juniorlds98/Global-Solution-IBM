import { useEffect, useState } from 'react';
import { getDadosDaCidade } from '../services/dadosMocados';
import ClimaCard from '../components/cards/ClimaCard';
import StatusSensorCard from '../components/cards/StatusSensorCard';
import QuantidadeSensoresCard from '../components/cards/QuantidadeSensoresCard';
import NivelAguaCard from '../components/cards/NivelAguaCard';
import Mapacard from '../components/cards/Mapacard';
import UmidadeCard from '../components/cards/UmidadeCard';
import PrecipitacaoCard from '../components/cards/PrecipitacaoCard';
import Header from './Header'
import 'leaflet/dist/leaflet.css';


import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [dadosCidade, setDadosCidade] = useState(null);
  const [precipitacao, setPrecipitacao] = useState({});
  const [markers, setMarkers] = useState([
    {
      id: 1,
      position: { lat: -23.55052, lng: -46.633308 },
      info: 'Local inicial',
      umidade: 48,
    },
  ]);
  useEffect(() => {
  const dados = getDadosDaCidade('sao paulo');
  setDadosCidade(dados);

  const dadosMock = {
    hoje: 12,
    terca: 8,
    quarta: 15,
    quinta: 0,
  };
  setPrecipitacao(dadosMock);
}, []);


  return (
    <div>
      <Header/>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '20px' }}>
        <ClimaCard dadosCidade={dadosCidade} />
        <StatusSensorCard sensor={dadosCidade?.sensor} />
        <QuantidadeSensoresCard />
        <NivelAguaCard />
        <Mapacard markers={markers} setMarkers={setMarkers} />
        <UmidadeCard />
        <PrecipitacaoCard precipitacao={precipitacao} />
      </div>
    </div>
  );
};

export default Dashboard;
