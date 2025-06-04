import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import "./Login.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();

    if (!email || !userName || !password || !confirmPassword) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    alert(`Registrando: ${userName} (${email})`);
  };

  return (
    <div className="estilizacao">
        <div className="container">
        <form onSubmit={handleRegister}>
          <h1>Crie sua conta</h1>

          <div className="input-field">
            <input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaEnvelope className="icon" />
          </div>

          <div className="input-field">
            <input
              type="text"
              placeholder="Nome de usuário"
              onChange={(e) => setUserName(e.target.value)}
            />
            <FaUser className="icon" />
          </div>

          <div className="input-field">
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>

          <div className="input-field">
            <input
              type="password"
              placeholder="Confirmar senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          <button type="submit">Registrar</button>
          <div className="signup-link"> 
            <p>
              Já tem uma conta? <Link to="/login">Entrar</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
