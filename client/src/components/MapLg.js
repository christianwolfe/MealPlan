import React, { useState } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import * as bankData from "../data/orlando-food-banks.json";

const GoogMap = () => {
  const [selectedBank, setSelectedBank] = useState(null);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 28.538336, lng: -81.379234 }}
    >
      {bankData.features.map((bank) => (
        <Marker
          key={bank.properties.BANK_ID}
          position={{
            lat: bank.geometry.coordinates[0],
            lng: bank.geometry.coordinates[1],
          }}
          onClick={() => {
            setSelectedBank(bank);
          }}
        />
      ))}
      {selectedBank && (
        <InfoWindow
          position={{
            lat: selectedBank.geometry.coordinates[0],
            lng: selectedBank.geometry.coordinates[1],
          }}
          onCloseClick={() => {
            setSelectedBank(null);
          }}
        >
          <div>
            <h4>{selectedBank.properties.NAME}</h4>
            <p>{selectedBank.properties.PHONE}</p>
            <p>{selectedBank.properties.ADDRESS}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const MapWrapped = withScriptjs(withGoogleMap(GoogMap));

const MapLg = () => {
  return (
    <div style={{ justifyContent: "center", width: "75vw", height: "45vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default MapLg;
