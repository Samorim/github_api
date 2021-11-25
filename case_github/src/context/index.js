import React, { useState, createContext , useEffect} from 'react';

export const context = createContext();

export const ContextProvider = (props) => {
    const [userData, setUserData] = useState({});
   

useEffect(() => {
    console.log(userData)
  
    
}, [userData])


    return (
        <context.Provider value={{
            userData,
           
            setUserData,
           
        }}>
            {props.children}
        </context.Provider>
    );
}