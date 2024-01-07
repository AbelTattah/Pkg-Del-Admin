"use client";

import { useRef, useState, useEffect,useMemo } from "react";
import {
  Marker,
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import BottomNavbar from "../Components/BottomNavbar";
import comScience_logo from "../Images/comScience_logo.png";
import { Admin } from "../Admin/Admin";
import MarkerMapper from "../Components/MarkerMapper";


const google = window.google;

export default function Dashboard() {
  const [position, setPosition] = useState({ lat: 5.524252, lng: -0.333984 });
  const [p2,setP2] = useState({lat: 5.524252, lng: -1.333984});

  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [activeRiders, setActiveRiders] = useState(0);
  const temp = useRef([
    {
      _id: "6588067ffab09a8173ce8e83",
      FirstName: "Kofi",
      LastName: "Mole",
      Email: "molemole@gmail.com",
      Location: [6.45, -2323],
    },
    {
      _id: "65904f4d0d4e40e395dda66d",
      FirstName: "Abel",
      LastName: "abel990",
      Email: "asfdgmail.com",
      Location: [6.33, -0.67],
    },
  ]);



  const admin = new Admin();
  var Markers = <></>;


    
 
  var lat = 0;
  
  useEffect(() => {
    const interval = setInterval(() => {
      admin.seeAllMovingRiders();
      setTimeout(() => {
        setActiveRiders(admin.activeRiders.length);
        setPosition({ lat: admin.activeRiders[0]["Location"][0], lng:admin.activeRiders[0]["Location"][0] });     
      }, 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <APIProvider apiKey={"YOUR_API_KEY"}>
      <div className="topSection">
        <div className="title">
          <div className="title0">
            <text>Payload</text>
          </div>
          <div className="title1">
            <text>Home</text>
          </div>
        </div>
      </div>
      <div style={{ height: "80vh", width: "100%", display: "flex", flexDirection: "row" }}>
        <Map style={{ height: "100%", width: "94%" }} zoom={13} center={position}>
          <Marker
            icon={{
              url: require("../Images/Riderr.png"),
              anchor: new google.maps.Point(5, 58),
              scaledSize: new google.maps.Size(45, 45),
            }}
            position={position}
          />
          {(admin.avrdfind)?( <MarkerMapper data={admin.activeRiders} />):(<></>)}
         
        </Map>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            Active riders:
            <br></br>
            {activeRiders}
          </div>
          <div>
            Total riders:
            <br></br>
            {activeRiders}
          </div>
        </div>
      </div>
      <BottomNavbar />
    </APIProvider>
  );
}
        
      