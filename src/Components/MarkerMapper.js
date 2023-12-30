import { Marker } from "@vis.gl/react-google-maps";
import React from "react";


/*
   The aim of this component is to render multiple markers on the map based on the 
   riders available
   Requirements:
   1. Render Available riders based on their location
   2. Render such that user or admin will be able to see some details of the rider
   3. Do not render riders without location info
   4. The markers must be customized
   5. 


   If the riders turn on their location in the front-end then a location will be recorded and sent to the mongo db database.
   This means that the location of the rider will be changing constantly and the other frontends must update with the 
   changes
   An endpoint in the server can be made to provide all riders with location info.
   Meaning that if location info cannot be found then the rider is not available 
 */


  function  MarkerMapper({data,style,style0}) {
    const messages =data;
  
    return (
      <div style={style0}>
          {messages.map((message, index) => {
            const [course, content] = message.split(/:(.+)/);
  
            return (
              <Marker key={index}>
              </Marker>
            );
          })}
      </div>
    );
  };

  export default Mapper;