import React from 'react';
import { useState } from 'react';

let Usercontext = React.createContext();

export default Usercontext;


export const UserProvider = ({children}) => {
    const [userdata, setuserdata] = useState([{
        name: "Person 1",
        position : "System Architect",
        office: "Chennai",
        age : 30,
        startdate : "2021-08-11",
        salary : "800000"
    },
    {
        name: "Person 2",
        position : "System Manager",
        office: "Bangalore",
        age : 25,
        startdate : "2021-08-11",
        salary : "600000"
    },
    {
        name: "Person 3",
        position : "System Engineer",
        office: "Pune",
        age : 27,
        startdate : "2021-08-11",
        salary : "400000"
    },
    {
        name: "Person 4",
        position : "Senior Developer",
        office: "Delhi",
        age : 32,
        startdate : "2021-08-11",
        salary : "1000000"
    }]);
    return <Usercontext.Provider value={{userdata, setuserdata}}>
        {children}
        </Usercontext.Provider>
}