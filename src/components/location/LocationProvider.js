import React, { useState, useEffect } from "react"

// the context is imported and used by individual components that need data

export const LocationContext = React.createContext()

// This component establishes what data can be used.

export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
        
        .then(res => res.json())
        .then(setLocations)
    },

const addLocation = (location) => {
    return fetch("http://localhost:8088/locations", {
        method: "POST"
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(location)
    })
    .then(getLocations)
}

return (
    <LocationContext.Provider value={{
        locations, addLocation, getLocations
    }}>
        {props.children}
    </LocationContext.Provider>
)
}