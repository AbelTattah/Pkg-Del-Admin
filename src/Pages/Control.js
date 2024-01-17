import React, { useState } from "react";
import BottomNavbar from "../Components/Navbar";
import "../Styling/form.css";
import Mapper from "../Components/Mapper";
import { Admin } from "../Admin/Admin";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";

function Control() {
  const admin = new Admin();
  var [customerCount, setCustomerCount] = useState(0);
  var [riderCount, setRiderCount] = useState(0);
  var [activeRiderCount, setActiveRiderCount] = useState(0);
  var [temp0, setTemp0] = useState([
    {
      FirstName: "No user info available",
      LastName: "",
      UserName: "",
      Email: "",
      Location: [],
    },
  ]);
  var [temp1, setTemp1] = useState([
    {
      FirstName: "No user info available",
      LastName: "",
      UserName: "",
      Email: "",
      Location: [],
    },
  ]);

  useEffect(() => {
    admin.viewAllUsers();
    admin.seeAllMovingRiders();
    setTimeout(() => {
      setTemp0(admin.riders);
      setActiveRiderCount(admin.activeRiders.length);
      setRiderCount(admin.riders.length);
      setTemp1(admin.customers);
      setCustomerCount(admin.customers.length);
      console.log(customerCount);
    }, 3000);
  }, []);

  return (
    <div className="Mainn">
      <div className="topSection">
        <div className="title">
          <div className="title0">
            <text>Payload</text>
          </div>
          <div className="title1">
            <text>Admin Control</text>
          </div>
        </div>
        <Navbar />
      </div>
      <h3>Customers</h3>
      <div className="control">
        <Mapper
          data={temp0}
          style={{
            width: "100%",
            height: "20px",
            backgroundColor: "#eee",
            marginBottom: "20px",
            padding: "20px",
            borderRadius: "5px",
          }}
          style0={{ width: "40%", height: "90%", padding: "10px" }}
        />
        <div className="stats">
          <h4>Total: {customerCount}</h4>
          <div>
            <h4>Active: 0</h4>
            <br></br>
          </div>
          <div>
            <h4>Pending delivery Requests: 0</h4>
            <br></br>
            <p></p>
            <h4>Deliveries in progress: 0</h4>
            <br></br>
            <p></p>
            <h4>Completed deliveries: 0</h4>
            <br></br>
          </div>
        </div>
      </div>
      <h3>Riders</h3>
      <div className="control">
        <Mapper
          data={temp1}
          style={{
            width: "100%",
            height: "20px",
            backgroundColor: "#eee",
            marginBottom: "20px",
            padding: "20px",
            borderRadius: "5px",
          }}
          style0={{ width: "40%", height: "90%", padding: "10px" }}
        />
        <div className="stats">
          <h4>Total: {customerCount}</h4>
          <div>
            <h4>Active: {activeRiderCount}</h4>
            <br></br>
          </div>
          <div>
            <h4>Pending deliveries: 0</h4>
            <br></br>
            <p></p>
            <h4>Deliveries in progress: 0</h4>
            <br></br>
            <p></p>
            <h4>Completed deliveries: 0</h4>
            <br></br>
          </div>
        </div>
      </div>
      <div className="bottom">
        <text>PKGDEL @2023</text>
      </div>
    </div>
  );
}

export default Control;
