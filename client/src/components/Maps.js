import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import * as bankData from "../data/orlando-food-banks.json"

const GoogMap = () => {
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 28.538336, lng: -81.379234 }}
    />
  );
};

const MapWrapped = withScriptjs(withGoogleMap(GoogMap));

const Map = () => {
  return (
    <div style={{ width: "50vw", height: "50vw" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      >

      </MapWrapped>
    </div>
  );
};

export default Map;
