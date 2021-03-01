import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

const ProductMapDetail = ({ lati, longi }) => {
  //   const LocationMarker = () => {
  //     const [position, setPosition] = useState(null);
  //     const map = useMapEvents({
  //       click() {
  //         map.locate();
  //       },
  //       locationfound(e) {
  //         setPosition(e.latlng);
  //         map.flyTo(e.latlng, map.getZoom());
  //       },
  //     });
  //     console.log(position);

  //     return position === null ? null : (
  //       <Marker position={position}>
  //         <Popup>here</Popup>
  //       </Marker>
  //     );
  //   };

  return (
    <div>
      <MapContainer
        className="map_box"
        center={{ lat: lati, lng: longi }}
        zoom={18}
      >
        <TileLayer url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=LO8Ma6cWRDbfY6C4HXDM" />
        {/* <LocationMarker /> */}

        <Marker color="red" position={{ lat: lati, lng: longi }}></Marker>
      </MapContainer>
    </div>
  );
};
export default ProductMapDetail;
