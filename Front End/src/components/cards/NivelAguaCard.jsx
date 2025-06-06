import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const NivelAguaCard = () => {
  const [width, setWidth] = useState('25%');

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setWidth('100%');  // celular
      } else if (window.innerWidth < 1024) {
        setWidth('48%');   // tablet
      } else {
        setWidth('23%');   // desktop
      }
    };

    updateWidth();

    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div
      className="bg-white p-4 rounded-xl shadow w-full sm:w-[48%] lg:w-[24%] min-w-[200px]"
      style={{ height: '300px', width }}
    >
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

