import React from "react";
import BottomNavbar from "../Components/Navbar";

function Messaging() {
  return (
    <div className="Mainn">
      <div className="topSection">
        <div className="title">
          <div className="title0">
            <text>Payload</text>
          </div>
          <div className="title1">
            <text>Help and Support</text>
          </div>
        </div>
      </div>
      <div id="navbar">
        <BottomNavbar />
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default Messaging;
