import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import Header from './Header'

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const AddMarkerOnClick = ({ onAddMarker }) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      const description = prompt('Digite a descrição do novo ponto:');
      if (description) {
        onAddMarker({ lat, lng, description });
      }
    },
  });
  return null;
};

const MapaExpandido = () => {
  const position = [-23.5119, -46.6619];
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const savedMarkers = localStorage.getItem('markers');
    if (savedMarkers) {
      setMarkers(JSON.parse(savedMarkers));
    } else {
      setMarkers([{ lat: position[0], lng: position[1], description: 'Local inicial' }]);
    }
  }, []);

  const handleAddMarker = (newMarker) => {
    setMarkers((prev) => {
      const updatedMarkers = [...prev, newMarker];
      localStorage.setItem('markers', JSON.stringify(updatedMarkers));
      return updatedMarkers;
    });
  };

  return (

    <div style={{ height: '100vh', width: '100%' }}>
    <Header/>
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map(({ lat, lng, description }, idx) => (
          <Marker key={idx} position={[lat, lng]}>
            <Popup>{description}</Popup>
          </Marker>
        ))}

        <AddMarkerOnClick onAddMarker={handleAddMarker} />
      </MapContainer>
    </div>
  );
};

export default MapaExpandido;




