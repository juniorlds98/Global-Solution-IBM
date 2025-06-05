import React from 'react';
import { Bar } from 'react-chartjs-2';

const QuantidadeSensoresCard = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow w-full sm:w-[48%] lg:w-[24%]">
      <h3 className="font-semibold border-b border-gray-300 pb-1 mb-2">Quant. sensores</h3>
      <div className="h-40 md:h-48">
        <Bar
          data={{
            labels: ['Novos', 'Concluídos'],
            datasets: [
              {
                label: 'Sensores',
                data: [2, 25],
                backgroundColor: ['#3B82F6', '#EF4444'],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            scales: {
              x: {
                beginAtZero: true,
                ticks: { stepSize: 5 },
              },
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: context => `${context.label}: ${context.parsed.x} sensores`,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default QuantidadeSensoresCard;
