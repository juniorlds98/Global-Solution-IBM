import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Registrar';
import NotFoundError from './components/errors/erro404';
import NotFoundError2 from './components/errors/erro401';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Rota catch-all para páginas não encontradas*/}
          <Route path="*" element={<NotFoundError />}/>
          <Route path="/erro401" element={<NotFoundError2 />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

