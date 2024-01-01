"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { RecoilRoot, useRecoilValue } from "recoil";
import { locationState } from "@/atoms/location";

export default function Map(props:{position:LatLngExpression}) {
    const location = useRecoilValue(locationState);
    console.log("Location from Map =>",location);
  return (
    <div className="h-full w-full">
      <RecoilRoot>
      <MapContainer
        center={props.position}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={props.position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      </RecoilRoot>
    </div>
  )
}
