import React, { useState, useEffect } from "react";

const Card = ({ title, customContent }) => {
  const [width, setWidth] = useState('25%');

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setWidth('100%');
      } else if (window.innerWidth < 1024) {
        setWidth('48%');
      } else {
        setWidth('24%');
      }
    };

    updateWidth();

    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div
      className="bg-white p-4 rounded-xl shadow min-w-[200px]"
      style={{ height: '300px', width }}
    >
      <h3 className="font-semibold border-b border-gray-300 pb-1 mb-2">{title}</h3>
      {customContent ? customContent : <div className="text-gray-400 text-sm">[Conteúdo aqui]</div>}
    </div>
  );
};

export default Card;