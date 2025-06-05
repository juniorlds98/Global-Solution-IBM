import React from "react";

const Card = ({ title, customContent }) => (
  <div className="bg-white p-4 rounded-xl shadow min-h-[120px]">
    <h3 className="font-semibold border-b border-gray-300 pb-1 mb-2">{title}</h3>
    {customContent ? customContent : <div className="text-gray-400 text-sm">[Conteúdo aqui]</div>}
  </div>
);

export default Card;