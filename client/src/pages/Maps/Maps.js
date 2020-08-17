import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "30vw",
  height: "40vh",
};

const center = {
  lat: 28.538336,
  lng: -81.379234,
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading google maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
      />
    </div>
  );
};

export default Map;
