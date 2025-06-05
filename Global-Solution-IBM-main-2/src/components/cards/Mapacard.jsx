import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapaCard = () => {
  const [width, setWidth] = useState('25%');
  const position = [-23.5119, -46.6619];

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setWidth('100%'); // celular
      } else if (window.innerWidth < 1024) {
        setWidth('48%'); // tablet
      } else {
        setWidth('24%'); // desktop
      }
    };

    updateWidth(); // inicial

    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

return (
  <div
    className="bg-white p-4 rounded-xl shadow w-full sm:w-[100%] lg:w-[100%] min-w-[200px] relative"
    style={{ height: '300px', width }}
  >
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '90%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Local inicial</Popup>
      </Marker>
    </MapContainer>

    <Link to="/mapa-expandido" className="absolute top-2 right-4 bg-blue-600 text-black px-2 py-1 rounded hover:bg-blue-700">
      expandir mapa
    </Link>
  </div>
);
}

export default MapaCard;

