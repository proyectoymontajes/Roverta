import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZW5kZXItZGV2IiwiYSI6ImNsbHRoYmE2azExajMzZHFqMGJ2czdpN2oifQ.8_a-nIIeM6fpnsJMVmZBHg";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
