import React, { useState, useEffect } from "react";
import BottomNavbar from "../Components/Navbar";
import "../Styling/form.css";
import Mapper from "../Components/Mapper";
import { Admin } from "../Admin/Admin";
import Navbar from "../Components/Navbar";
import Button from "../Components/button";
import { Bars } from "react-loader-spinner";

function Control() {
  const admin = new Admin();
  const [customerCount, setCustomerCount] = useState(0);
  const [riderCount, setRiderCount] = useState(0);
  const [activeRiderCount, setActiveRiderCount] = useState(0);
  const [isInfoSet, SetIsInfoSet] = useState("");
  const [search,setSearch] = useState("");
  const [searchTerm,setSearchTerm] = useState("");
  const [searchResults,setResults] = useState([]);
  const [temp0, setTemp0] = useState([
    {
      FirstName: "No user info available",
      LastName: "",
      UserName: "",
      Email: "",
      Location: [],
    },
  ]);
  const [temp1, setTemp1] = useState([
    {
      FirstName: "No user info available",
      LastName: "",
      UserName: "",
      Email: "",
      Location: [],
    },
  ]);
  








  //Handle user search 
  const Search = () => {
    
    setSearch("false");

    //Query for Customer Data 
    admin.getCustomerDetails(searchTerm);

    //Query for Rider Data
    admin.getRiderDetails(searchTerm);

    setTimeout(()=>setResults(admin.riders),4000);

    console.log(searchResults);

    setTimeout(()=>setSearch("true"),6000);

  }

  useEffect(() => {
    admin.viewAllUsers();
    admin.seeAllMovingRiders();
    setTimeout(() => {
      setTemp0(admin.riders);
      setActiveRiderCount(admin.activeRiders.length);
      setRiderCount(admin.riders.length);
      setTemp1(admin.customers);
      setCustomerCount(admin.customers.length);
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
      <div className="SearchBar">
        <text className="SearchBarTitle">Search Bar</text>
        <div className="Search">
          <input onChange={(e)=>setSearchTerm(e.target.value)}></input>
          <Button onClick={()=>Search()} label="Search" />
        </div>
      </div>
      <div className="control">
        <div className="users">
          {
            (search === "true")?(
              <div
                  style={{
                    height: 300,
                    width: 300,
                    backgroundColor: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 20,
                    padding: 10,
                  }}
                >
                  {searchResults.map((endpoint) => (
                    <button
                      style={{
                        height: 50,
                        width: 250,
                        backgroundColor: "#fff",
                        borderTopWidth:1,
                        borderBottomWidth:1,
                        borderRightWidth:0,
                        borderLeftWidth:0,
                        padding: 10,

                        margin: 10,
                      }}
                      onPress={() => {
                      }}
                    >
                      <text
                        style={{
                          textAlign: "center",
                        }}
                      >
                        {endpoint.FirstName} {endpoint.LastName}
                      </text>
                    </button>
                  ))}
                </div>
            ):(search === "false")?(
            <>Searching for Users ...</>
            ):(   <div
                  style={{
                    height: 300,
                    width: 300,
                    backgroundColor: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 20,
                    padding: 10,
                  }}
                >
                  {admin.customers.map((endpoint) => (
                    <button
                      style={{
                        height: 50,
                        width: 250,
                        backgroundColor: "#fff",
                        borderTopWidth:1,
                        borderBottomWidth:1,
                        borderRightWidth:0,
                        borderLeftWidth:0,
                        padding: 10,

                        margin: 10,
                      }}
                      onPress={() => {
                      }}
                    >
                      <text
                        style={{
                          textAlign: "center",
                        }}
                      >
                        {endpoint.FirstName} {endpoint.LastName}
                      </text>
                    </button>
                  ))}
                  {admin.riders.map((endpoint) => (
                    <button
                      style={{
                        height: 50,
                        width: 250,
                        backgroundColor: "#fff",
                        borderTopWidth:1,
                        borderBottomWidth:1,
                        borderRightWidth:0,
                        borderLeftWidth:0,
                        padding: 10,

                        margin: 10,
                      }}
                      onPress={() => {
                      }}
                    >
                      <text
                        style={{
                          textAlign: "center",
                        }}
                      >
                        {endpoint.FirstName} {endpoint.LastName}
                      </text>
                    </button>
                  ))}
                </div>)
          }
        </div>
        <div className="info">
          {isInfoSet === "Yes" ? (
            <></>
          ) : isInfoSet === "No" ? (
            <></>
          ) : (
            <>
              <h4>Loading</h4>
              {"   "}
              <Bars
                height="20"
                width="20"
                color="black"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </>
          )}
        </div>
      </div>
      <div className="bottom">
        <text>PKGDEL @2023</text>
      </div>
    </div>
  );
}

export default Control;
