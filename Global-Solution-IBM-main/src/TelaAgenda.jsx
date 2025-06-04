import HeaderBootstrap from './components/HeaderBootstrap';
import TempoDeAtendimento from './components/TempoDeAtendimento';
import AgendaMedica from './components/AgendaMedica';
import ChamadasFooter from './components/ChamadasFooter';
import Iniciativas from './components/Iniciativas';
import SidebarPacientes from './components/SidebarPacientes';
import TabelaAgenda from './components/TabelaAgenda';
import Footer from './components/Footer';

export default function TelaAgenda() {
  return (
    <>
      {/*<SidebarPacientes />*/}
      {<TempoDeAtendimento />}
      {<AgendaMedica />}
      {/*<TabelaAgenda />*/}
      {<ChamadasFooter />}
      {<Iniciativas />}
      {<Footer />}
    </>
  );
}
