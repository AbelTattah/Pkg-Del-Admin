"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import {
  Marker,
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import BottomNavbar from "../Components/Navbar";
import { Admin } from "../Admin/Admin";
import MarkerMapper from "../Components/MarkerMapper";
import Navbar from "../Components/Navbar";
import "../Styling/dashboard.css";
import Button from "../Components/button";

const google = window.google;

export default function Dashboard() {
  const [position, setPosition] = useState({ lat: 5.524252, lng: -0.333984 });
  const [p2, setP2] = useState({ lat: 5.524252, lng: -1.333984 });
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [activeRiders, setActiveRiders] = useState([]);
  const [activeRiderCount, setActiveRiderCount] = useState(0);
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

  useEffect(() => {
    admin.seeAllMovingRiders();
    setTimeout(() => {
      admin.seeAllMovingPackages();
    }, 2000);
    // Get latest rider info and render on map
    const interval = setInterval(() => {
      admin.seeAllMovingRiders();
      setTimeout(() => {
        setActiveRiderCount(admin.activeRiders.length);
        setActiveRiders(admin.activeRiders);
        //   setPosition({ lat: admin.activeRiders[0]["Location"][0], lng:admin.activeRiders[0]["Location"][0] });
      }, 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 4000);
  }, []);

  return (
    <APIProvider apiKey="YOUR_API_KEY">
      <div className="topSection">
        <div className="title">
          <div className="title0">
            <text>Payload</text>
          </div>
          <div className="title1">
            <text>Admin</text>
          </div>
        </div>
        <Navbar />
      </div>
      <div className="topSectionPanel">
      <div className="Buttons">
        <Button label="Show Riders"/>
        <Button label="Show Recievers" />
        <Button label="Graph" />
      </div>
      <div className="AdminInfo">
        <text className="AdminName">
          Admin: Tattah Abel Mawunyo
        </text>
      </div>
      </div>
      <div
        style={{
          height: "80vh",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-10px",
          marginLeft: "-3px",
        }}
      >
        <Map
          style={{
            height: "90%",
            width: "72.9%",
            marginLeft: "5px",
            marginRight: "5px",
          }}
          zoom={10}
          center={position}
        >
          {open ? <MarkerMapper data={activeRiders} /> : <></>}
        </Map>
        <div className="Stats">
          <div>
            Total riders:{"     "}
            <text style={{ color: "blue" }}>{admin.riders.length}</text>
            <br />
            Active riders:{"     "}
            <text style={{ color: "green" }}>{activeRiderCount}</text>
          </div>
          <div>
            Total customers:{"     "}
            <text style={{ color: "blue" }}>{admin.riders.length}</text>
            <br />
            Active customers:{"     "}
            <text style={{ color: "green" }}>{activeRiderCount}</text>
          </div>
          <div>
            Deliveries in progress:{"     "}
            <text style={{ color: "blue" }}>{admin.riders.length}</text>
            <br />
            Scheduled Deliveries:{"     "}
            <text style={{ color: "green" }}>{activeRiderCount}</text>
          </div>
          <div>
            Total Deliveries today:{"     "}
            <text style={{ color: "blue" }}>{admin.riders.length}</text>
            <br />
            Successful:{"     "}
            <text style={{ color: "green" }}>{activeRiderCount}</text>
          </div>
        </div>
      </div>
    </APIProvider>
  );
}
