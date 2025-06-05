import Card from './Card';

const PrecipitacaoCard = ({ precipitacao }) => (
  <Card title="Total de precipitação">
    <div className="mt-2 space-y-1">
      {['Hoje', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map(dia => (
        <p key={dia}><strong>{dia}:</strong> Chuva {precipitacao.hoje} mm</p>
      ))}
    </div>
  </Card>
);

export default PrecipitacaoCard;
