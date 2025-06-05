import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const QuantidadeSensoresCard = () => {
  const [width, setWidth] = useState('25%');

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setWidth('100%');  // celular
      } else if (window.innerWidth < 1024) {
        setWidth('48%');   // tablet
      } else {
        setWidth('24%');   // desktop
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div
      className="bg-white p-4 rounded-xl shadow w-full sm:w-[48%] lg:w-[24%] min-w-[200px] flex flex-col"
      style={{ height: '300px', width }}
    >
      <h3 className="font-semibold border-b border-gray-300 pb-1 mb-2 flex-shrink-0">
        Quant. sensores
      </h3>
      <div className="flex-grow">
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

