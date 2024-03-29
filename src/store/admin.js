/*
This file contains the admin context for global state management in the App
*/

import { createContext, useState } from "react"; // Import Create context and useState from react


export const adminContext = createContext({
    // Initial values of the context
    name:"",
    username:"",
    setName:()=>{},
    setUsername:()=>{}
})



export default function AdminContextProvider({children}) {
    // States for names
    const [name,setNAME] = useState("")
    const [username,setUSERNAME] = useState("")
    
    // Funtion for changing the name
    function setName (name) {
        setNAME(name)
    }
    
    // Function for Changing the username
    function setUsername (name) {
        setUSERNAME(name)
    }
    
    return(
        <adminContext.Provider value={{name,setName,username,setUsername}}>
            {children}
        </adminContext.Provider>
    )
}