import "./App.css";
import { useState, useEffect, useRef } from "react";
import {LngLatLike, Map, Marker } from "mapbox-gl";
import { onValue, ref } from "firebase/database";
import { database } from "../init-firebase";
import rover from "./assets/rover.ico";

function App() {
  const divMapaRef = useRef<HTMLDivElement>(null);
  const [mapa, setMapa] = useState<Map>();

  const [center, setCenter] = useState<LngLatLike>([-58.0001, -34]);

  const rvSym = document.createElement("img");
  rvSym.className = "marker";
  rvSym.src = rover;
  rvSym.style.width = `3rem`;
  rvSym.style.height = `3rem`;
  rvSym.style.backgroundSize = "100%";

  const marker = useRef<Marker>();

  const [vLat, setVLat] = useState(0);
  const [vLong, setVLong] = useState(0);

  var gpsLat: number;
  var gpsLong: number;

  useEffect(() => {
    onValue(ref(database), (snapshot) => {
      const data = snapshot.val();
      gpsLat = data?.GPSAccuracyLogger?.gpsLAT;
      gpsLong = data?.GPSAccuracyLogger?.gpsLONG;
      setCenter([gpsLong, gpsLat]);
      setVLat(gpsLat);
      setVLong(gpsLong);
    });
  }, []);

  useEffect(() => {
    mapa?.flyTo({ center });
    if (mapa) {
      if(marker.current)marker.current.remove();
      marker.current = new Marker(rvSym);
      marker.current.setLngLat(center).addTo(mapa);
    }
  }, [center]);

  useEffect(() => {
    if (divMapaRef.current) {
      setMapa(
        new Map({
          container: divMapaRef.current, // container ID
          style: "mapbox://styles/mapbox/streets-v12", // style URL
          center, // starting position [lng, lat]
          zoom: 8, // starting zoom
        })
      );
    }
  }, [divMapaRef]);

  function CenterMap() {
    mapa?.flyTo({ center});
  }
  function LockOn() {
    mapa?.flyTo({ center,zoom:18});
  }

  return (
    <body>
      <div className="overlay">
        <div className="btnsContainer">
          <button className="Btn" onClick={CenterMap}>
            Centrar Mapa
          </button>
          <button className="Btn" onClick={LockOn}>
            Enfocar a Roverta
          </button>
        </div>
        <div className="coordsDiv">
          <h2 className="coordsH2">LAT: {vLat}</h2>
          <h2 className="coordsH2">LONG: {vLong}</h2>
        </div>
      </div>
      <div className="mapDiv" ref={divMapaRef}></div>
    </body>
  );
}

export default App;
