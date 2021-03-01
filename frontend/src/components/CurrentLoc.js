import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });
  console.log(position);

  return position === null ? null : (
    <Marker style={{ color: "yellow" }} position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default LocationMarker;
