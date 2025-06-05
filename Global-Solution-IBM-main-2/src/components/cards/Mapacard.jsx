import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapaCard = () => {
  const position = [-23.5119, -46.6619]; // Latitude e longitude

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Local inicial</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapaCard;


