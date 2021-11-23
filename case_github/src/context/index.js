import React, { useState, createContext , useEffect} from 'react';

export const context = createContext();

export const ContextProvider = (props) => {
    const [userData, setUserData] = useState({});
    const [userRepos, setUserRepos] = useState([]);

useEffect(() => {
    console.log(userData)
    console.log(userRepos)
    
}, [userData,userRepos])


    return (
        <context.Provider value={{
            userData,
            userRepos,
            setUserData,
            setUserRepos
        }}>
            {props.children}
        </context.Provider>
    );
}