
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbHRrbW1zbjQwMXpqMmtvNnZqbm84dmZlIn0.a9lqNxpHXNrLDOUQHxJyLg';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [29.0321, 41.0484], // Istanbul, Nisantasi coordinates
      zoom: 14,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Create a popup
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    })
    .setHTML(
      '<div class="p-2">' +
        '<h3 class="font-bold mb-1">Beauty Clinic</h3>' +
        '<p class="text-sm">Halaskargazi Cad. Sebat Apt.<br>No:74 K:4 D:7<br>34371 Şişli/İstanbul</p>' +
      '</div>'
    );

    // Add marker and popup for clinic location
    const marker = new mapboxgl.Marker({ color: '#ef4444' })
      .setLngLat([29.0321, 41.0484])
      .setPopup(popup)
      .addTo(map.current);

    // Show popup by default
    popup.addTo(map.current);

    // Add click handler to make the map location open in Google Maps
    marker.getElement().addEventListener('click', () => {
      window.open(
        'https://www.google.com/maps/search/?api=1&query=Halaskargazi+Cad.+Sebat+Apt.+No:74+Şişli+İstanbul',
        '_blank'
      );
    });

    // Add hover effect for marker
    marker.getElement().addEventListener('mouseenter', () => {
      marker.getElement().style.cursor = 'pointer';
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow-lg text-sm max-w-[300px] backdrop-blur-sm">
        <p className="font-semibold mb-1">Beauty Clinic</p>
        <p>Halaskargazi Cad. Sebat Apt.</p>
        <p>No:74 K:4 D:7</p>
        <p>34371 Şişli/İstanbul</p>
      </div>
    </div>
  );
};

export default Map;
