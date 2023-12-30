"use client";

import { useState } from "react";
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
import { useEffect } from "react";

var google = window.google;
const CustomMarker =  google.maps.OverlayView;

export default function Dashboard() {
  const position = { lat: 5.524252, lng:-0.333984 };
  const position1 = {lat: 53.54992, lng: 10.00678}

  const [open, setOpen] = useState(false);
  var [loaded,setLoaded] = useState(false);

 

  useEffect(()=>{
    setTimeout(setLoaded(true),4000);
    setTimeout(console.log(loaded),5000);
  },[])

  return (
    <APIProvider apiKey={"AIzaSyCb_LpwPQv5gjNrMGvd9NvtQdRj8NwgrLk"}>
       <div className="topSection">
        <div className="title">
          <div className="title0"><text>Payload</text></div>
          <div className="title1"><text>Home</text></div>
        </div>
      </div>
      <div style={{ height: "80vh", width: "100%",display:"flex",flexDirection:"row" }}>
        <Map style={{ height: "100%", width: "94%"}} zoom={13} center={position}>
          

    <Marker  position={position1} />
    <Marker icon={{
        url: require('../Images/Riderr.jpeg'),
        anchor: new google.maps.Point(5, 58),
        scaledSize:  new google.maps.Size(45,45)
      }}  position={position} >
    </Marker>

        </Map>
        <div>

        </div>
      </div>
      <BottomNavbar />
    </APIProvider>
  );
}