import React from "react";
import UserContext from "./usercontext";

const UserContextProvider = ({children}) =>{
    return (
        <UserContext.Provider value ={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider