import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userName && password) {
      alert(`Enviando os dados: ${userName} - ${password}`);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <>
      <div className="estilizacao">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h1>Seja bem vindo</h1>

            <div className="input-field">
              <input 
                type="email"
                placeholder='E-mail'
                onChange={(e) => setUserName(e.target.value)} 
              />
              <FaUser className="icon" />
            </div>

            <div className="input-field">
              <input 
                type="password" 
                placeholder='Senha'
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="icon" />
            </div>

            <div className="recall-forget">
              <label>
                <input type="checkbox" />
                Lembre de mim
              </label>
              <a href="#">Esqueceu a senha</a>
            </div>

            <button type="submit"><Link to="/dashboard">Entrar</Link></button>

            <div className="signup-link"> 
              <p>
                Não tem uma conta? <Link to="/register">Registrar</Link>
              </p>
            </div>

            <div className="signup-link"> 
              <p>Faça login por</p> 
              <div className="icones">
                <Link to="/erro401" className="icon">
                  <img src="src/assets/Gmail_icon_(2020).svg.png" alt="Erro 401" />
                </Link>
                <Link to="/erro401" className="icon">
                  <img src="src/assets/124010.png" alt="Erro 401" />
                </Link>
                <Link to="/erro401" className="icon">
                  <img src="src/assets/linkedin_logo_initials.png" alt="Erro 401" />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

