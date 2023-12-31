"use client";

import { useRef, useState } from "react";
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
import { Admin } from "../Admin/Admin";
import MarkerMapper from "../Components/MarkerMapper";


const google =  window.google;
export default function Dashboard() {

  const position = { lat: 5.524252, lng:-0.333984 };
  const position1 = {lat: 53.54992, lng: 10.00678}

  const [open, setOpen] = useState(false);
  var [loaded,setLoaded] = useState(false);
  var temp =useRef([
    {
      "_id": "6588067ffab09a8173ce8e83",
      "FirstName": "Kofi",
      "LastName": "Mole",
      "Email": "molemole@gmail.com",
      "Location": [
        6.45,
        -2323
      ]
    },
    {
      "_id": "65904f4d0d4e40e395dda66d",
      "FirstName": "Abel",
      "LastName": "abel990",
      "Email": "asfdgmail.com",
      "Location": [
        6.33,
        -0.67
      ]
    }
  ]);

  const admin = new Admin();
  var Markers=<></>;

  useEffect(()=>{
       setInterval(()=>{
        admin.seeAllMovingRiders();
        setTimeout(()=>{temp.current = admin.activeRiders},2000);
       },3000);
  },[]);


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
        
          <Marker icon={{
              url: require('../Images/Riderr.png'),
              anchor: new google.maps.Point(5, 58),
              scaledSize:  new google.maps.Size(45,45)
            }}  position={position} >
          </Marker>
        <>
     
            <MarkerMapper data={temp.current} />
            
        </>
        </Map>
        <div>
        </div>
      </div>
      <BottomNavbar />
    </APIProvider>
  );
}