import React from 'react';
import { Line } from 'react-chartjs-2';

const NivelAguaCard = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow w-full sm:w-[48%] lg:w-[24%]">
      <h3 className="font-semibold border-b border-gray-300 pb-1 mb-2">Nível da água</h3>
      <div className="text-sm mt-2 h-40 md:h-64">
        <p className="text-right mb-1">Hoje: 68%</p>
        <Line
          data={{
            labels: ['06/01', '07/01', '08/01', '09/01', '10/01', '11/01', '12/01', '13/01'],
            datasets: [
              {
                label: 'Nível da água (%)',
                data: [38, 64, 61, 36, 44, 75, 69, 68],
                fill: false,
                borderColor: '#3B82F6',
                tension: 0.4,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default NivelAguaCard;
