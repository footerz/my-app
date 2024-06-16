import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  OverlayView,
  Polyline,
} from "@react-google-maps/api";
import { useParams } from "react-router-dom";

import "./Map.css";

//hard coded as co-ordinates were not surfaced on the graphql API's
const coordinates = [
  {
    holeId: "1",
    center: {
      lat: 51.332979220381155,
      lng: -0.515432026563598,
    },
    from: { lat: 51.33299446268925, lng: -0.5153622454568134 },
    to: { lat: 51.332968293492314, lng: -0.5155251298735176 },
    zoom: 20,
  },
  {
    holeId: "6",
    center: {
      lat: 51.32908345705973,
      lng: -0.5244284969519366,
    },
    from: { lat: 51.32807684393544, lng: -0.5252279202532794 },
    to: { lat: 51.32993489827903, lng: -0.5237562546303528 },
    zoom: 16.5,
  },
  {
    holeId: "13",
    center: {
      lat: 51.32534552554229,
      lng: -0.5316198338262587,
    },
    from: { lat: 51.32583090113449, lng: -0.531576682016621 },
    to: { lat: 51.32487591929013, lng: -0.531752513904192 },
    zoom: 18,
  },
];

interface MapProps {
  from?: string;
  to?: string;
  distance?: string;
}

export const Map: React.FC<MapProps> = ({ from, to, distance }) => {
  const { holeId } = useParams();

  const containerStyle = {
    width: "100%",
    height: "calc(100vh - 1.875rem - 0.125rem - 1.875rem)",
    borderRadius: "0.25rem",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAipGeeyGPo8uyk1QdzzvhWFIaQQQzyZUc",
  });

  const [map, setMap] = React.useState<boolean | null>(null);

  const onLoad = React.useCallback(function callback(map: any) {
    map.setOptions({
      disableDefaultUI: true,
      keyboardShortcuts: false,
    });

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  const holeCoordinates = coordinates?.find((hole) => hole.holeId === holeId);

  return (
    <div>
      {isLoaded && holeCoordinates ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={holeCoordinates?.center}
          zoom={holeCoordinates?.zoom}
          mapTypeId="satellite"
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <OverlayView
            mapPaneName={OverlayView.MARKER_LAYER}
            position={holeCoordinates?.from}
          >
            <p className="label flex center location">{from}</p>
          </OverlayView>
          <OverlayView
            mapPaneName={OverlayView.MARKER_LAYER}
            position={holeCoordinates?.to}
          >
            <p className="label flex center location">{to}</p>
          </OverlayView>
          <OverlayView
            mapPaneName={OverlayView.MARKER_LAYER}
            position={holeCoordinates?.center}
          >
            <p className="label flex center">{distance}yds</p>
          </OverlayView>
          <Polyline
            path={[holeCoordinates?.from, holeCoordinates?.to]}
            options={{
              strokeWeight: 3,
              strokeOpacity: 1.0,
              strokeColor: "#fff",
              clickable: false,
            }}
          />
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};
