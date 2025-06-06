import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Registrar';
import NotFoundError from './components/errors/erro404';
import NotFoundError2 from './components/errors/erro401';
import Dashboard from './components/Dashboard';
import SensorList from './components/SensorList';
import MapaExpandido from "./components/MapaExpandido";
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mapa-expandido" element={<MapaExpandido />} />
          <Route path="/sensores" element={<SensorList />} />
          {/* Rota catch-all para páginas não encontradas*/}
          <Route path="*" element={<NotFoundError />}/>
          <Route path="/erro401" element={<NotFoundError2 />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

