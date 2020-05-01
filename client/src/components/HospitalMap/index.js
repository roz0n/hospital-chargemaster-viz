import React from "react";
import styled from "styled-components";

import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const MAPBOX_KEY =
  "pk.eyJ1IjoiYXJub2xkcm96b24iLCJhIjoiY2p0YW02cDlpMGNsdDQ0cDdqaWZia29yMCJ9.pRRQbG5ebhZ_YSz8-an7jw";
const mapOptions = {
  lat: 37.0902,
  lon: -95.7129,
  url: `https://api.mapbox.com/styles/v1/arnoldrozon/cjtap0szn1e5k1fnqqzq6gyp2/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_KEY}`,
  attribution: `Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>`,
  leafletOptions: {
    attributionControl: true,
    zoomControl: false,
    doubleClickZoom: true,
    scrollWheelZoom: true,
    dragging: false,
    animate: true,
    easeLinearity: 0.35,
  },
};

const HospitalMap = ({
  lat,
  lon,
  geoData = [],
  activeHospitalId,
  setActiveHospital,
}) => {
  const position = [mapOptions.lat, mapOptions.lon];

  return (
    <Container>
      <Map
        options={mapOptions}
        center={position}
        zoom={5}
        onPopupClose={() => setActiveHospital(null)}
      >
        <TileLayer
          attribution={mapOptions.attribution}
          url={mapOptions.url}
          {...mapOptions.leafletOptions}
        />
        {geoData?.map((hospital, i) => {
          if (hospital) {
            return (
              <Marker
                key={`hospital-icon-${i}`}
                position={[hospital?.lat, hospital?.lon]}
                onClick={() => setActiveHospital(hospital?.place_id)}
              >
                <Popup>
                  <p>{hospital?.display_name}</p>
                </Popup>
              </Marker>
            );
          }
        })}
      </Map>
    </Container>
  );
};

const Container = styled.div({
  ".leaflet-container": {
    height: "100vh",
  },
});

export default HospitalMap;
