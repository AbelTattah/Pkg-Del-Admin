import React from "react";



var temp = [
  {
      "FirstName": "Kofi",
      "LastName": "Mole",
      "UserName": "mole99",
      "Email": "molemole@gmail.com",
      "Location": []
  },
  {
      "FirstName": "James",
      "LastName": "Tattah",
      "UserName": "abrladfad9904",
      "Email": "ab34r0i@gmail.com",
      "Location": []
  },
  {
      "FirstName": "John",
      "LastName": "Tah",
      "UserName": "abrladfad904",
      "Email": "ab34r0i@gmail.com",
      "Location": []
  },
  {
      "FirstName": "Kate",
      "LastName": "Taha",
      "UserName": "abladfad904",
      "Email": "ab34adfr0i@gmail.com",
      "Location": [
          6.3,
          1.2
      ]
  },
  {
      "FirstName": "Abel",
      "LastName": "abel990",
      "UserName": "adfdasf",
      "Email": "asfdgmail.com",
      "Location": [
          6.83,
          1.67
      ]
  }
]

  function  Mapper({data,style,style0}) {

    
   
    return (
      <div style={style0}>
           {
            data && data.map((rider) => (
              <div style={style}>
                <text>{`${rider.FirstName} ${rider.LastName}`}</text>
              </div>
            ))
           }
      </div>
    );
  };

  export default Mapper;