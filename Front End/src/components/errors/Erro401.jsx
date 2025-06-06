import { useNavigate } from 'react-router-dom';

export default function NotFoundError2() {
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
        <h1>401</h1>
        <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "1rem" }}>
          Oops! Você não tem acesso a essa função!
        </h2>
        <p style={{ color: "#fff", textAlign: "center", marginBottom: "2rem" }}>
          Parece que a página que você está tentando é de acesso administrativo. <br />
          Procure autorização com o responsável.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button onClick={() => navigate(-1)} style={{ flex: 1 }}>
            Voltar
          </button>
          <button onClick={() => navigate("/")} style={{ flex: 1 }}>
            Voltar para o Início
          </button>
        </div>
      </div>
    </div>
  );
}
