import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoiem9seTg4IiwiYSI6ImNsMTZnNHQ0cjE5bm0zZXBkaWJuMGN6bmgifQ.WdZ3VhrsPwsx3ATRVDB5_Q";

export function Map(props) {
  const mapContainer = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [props.longitude, props.latitude],
      zoom: 13,
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-right");

    const marker = new mapboxgl.Marker()
      .setLngLat([props.longitude, props.latitude])
      .setPopup(new mapboxgl.Popup().setHTML(`<p>${props.name}</p>`))
      .addTo(map);

    marker.togglePopup();

    // cleanup function to remove map on unmount
    return () => map.remove();
  }, [props]);

  return <div className="map-container" ref={mapContainer} />;
}
