import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import * as bankData from "../data/orlando-food-banks.json";

const GoogMap = () => {
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 28.538336, lng: -81.379234 }}
    >
      {bankData.features.map((bank) => (
        <Marker
          key={bank.properties.BANK_ID}
          position={{
            lat: bank.geometry.coordinates[1],
            lng: bank.geometry.coordinates[0],
          }}
        />
      ))}
    </GoogleMap>
  );
};

const MapWrapped = withScriptjs(withGoogleMap(GoogMap));

const Map = () => {
  return (
    <div style={{ width: "25vw", height: "25vw" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default Map;
