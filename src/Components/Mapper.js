import React from "react";



  function  Mapper({data,style,style0}) {
    const messages =data;
  
    return (
      <div style={style0}>
          {messages.map((message, index) => {
            const [course, content] = message.split(/:(.+)/);
  
            return (
              <div style={style} key={index}>
                <strong>{course}:</strong> {content.trim()}
              </div>
            );
          })}
      </div>
    );
  };

  export default Mapper;