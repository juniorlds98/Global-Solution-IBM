import Card from './Card';

const UmidadeCard = ({ umidade, local }) => (
  <Card title={`Umidade do ar - ${local}`}>
    <div className="mt-2">
      <p className="text-2xl font-bold text-center">{umidade}%</p>
      <div className="h-4 bg-gray-300 rounded mt-2">
        <div
          className="h-full bg-blue-500 rounded"
          style={{ width: `${umidade}%` }}
        ></div>
      </div>
    </div>
  </Card>
);

export default UmidadeCard;
