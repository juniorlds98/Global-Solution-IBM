import { useNavigate } from 'react-router-dom';

export default function NotFoundError() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#000',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container" style={{ maxWidth: 450 }}>
        <h1>404</h1>
        <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "1rem" }}>
          Oops! Página não encontrada!
        </h2>
        <p style={{ color: "#fff", textAlign: "center", marginBottom: "2rem" }}>
          Parece que a página que você está tentando acessar <br />
          não existe ou foi removida.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button onClick={() => navigate("/")} style={{ flex: 1 }}>
            Voltar para o Início
          </button>
        </div>
      </div>
    </div>
  );
}

