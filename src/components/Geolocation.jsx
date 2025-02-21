"use client"
import { useEffect, useState } from 'react';

export default function Geolocation() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Erro ao obter localização:', error);
        }
      );
    } else {
      console.error('Geolocalização não é suportada pelo navegador.');
    }
  }, []);

  if (!location) {
    return <p>Obtendo localização...</p>;
  }

  return (
    <div>
      <h2>Sua localização:</h2>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
    </div>
  );
}
