"use client";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoicmFjaG91YW4iLCJhIjoiY2ptYWhvZWMxMGlncDNzcHRjcHI4dWFybyJ9.LZU4i8T_QRFEpCtSLJRr7Q";

export interface MapProps {
  longitude?: number;
  latitude?: number;
}

export default function Map({ longitude = -70.9, latitude = 42.35 }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef(null);
  const [lng, setLng] = useState(longitude);
  const [lat, setLat] = useState(latitude);
  const [zoom, setZoom] = useState(1.5);

  useEffect(() => {
    if (!map.current) return;
    // @ts-ignore
    map.current.flyTo({
      center: [lng, lat],
      zoom,
    });
    // @ts-ignore
    map.current.scrollZoom.disable();
  }, [lat, lng]);

  useEffect(() => {
    setLat(latitude || 0);
    setLng(longitude || 0);
  }, [longitude, latitude]);

  useEffect(() => {
    if (map.current) return;
    // @ts-ignore
    map.current = new mapboxgl.Map({
      // @ts-ignore
      container: mapContainer.current,
      style: "mapbox://styles/rachouan/cjmg9nh2g6u0z2sozdyirs0c2/draft",
      center: [longitude, latitude],
      zoom: zoom,
    });
  }, []);

  return <div ref={mapContainer} className="map-container w-full flex-grow" />;
}
