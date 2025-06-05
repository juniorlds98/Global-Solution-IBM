import { useEffect, useState } from 'react';
import { getDadosDaCidade } from '../services/dadosMocados';
import ClimaCard from '../components/cards/ClimaCard';
import StatusSensorCard from '../components/cards/StatusSensorCard';
import QuantidadeSensoresCard from '../components/cards/QuantidadeSensoresCard';
import NivelAguaCard from '../components/cards/NivelAguaCard';
import MapaCard from '../components/cards/Mapacard';
import UmidadeCard from '../components/cards/UmidadeCard';
import PrecipitacaoCard from '../components/cards/PrecipitacaoCard';
import Mapacard from './Mapacard';
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

    async function fetchPrecipitacao() {
      try {
        const response = await fetch("URL_DA_SUA_API_AQUI");
        const data = await response.json();
        setPrecipitacao({
          hoje: data.hoje,
          terca: data.terca,
          quarta: data.quarta,
          quinta: data.quinta,
        });
      } catch (error) {
        console.error("Erro ao buscar precipitação:", error);
      }
    }

    fetchPrecipitacao();
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full">
      <div className="flex flex-wrap gap-4">
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
