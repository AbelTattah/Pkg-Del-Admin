import React from "react";



  function  Mapper({data,style,style0}) {
    const users =data;
  
    return (
      <div style={style0}>
          {users.map((user, index) => {
           
            return (
              <div style={style} key={user.UserName}>
               <p>{user.FirstName}  {user.LastName}</p>
               {user.Email}
              </div>
            );
          })}
      </div>
    );
  };

  export default Mapper;