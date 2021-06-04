import React, { useState, createContext } from "react"

export const LocationContext = createContext()

export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations?_embed=employees&_embed=animals")
        .then (res => res.json())
        .then (setLocations)
    }

    const addLocation = locatObj => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locatObj)
        })
        .then(res => res.json())
        .then(getLocations)
    }

    const updateLocation = locatObj => {
        return fetch(`http://localhost:8088/locations/${locatObj.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locatObj)
        })
        .then(res => res.json())
        .then(getLocations)
    }

    const getLocationById = locationId => {
        return fetch(`http://localhost:8088/locations/${locationId}`)
        .then (res => res.json())
    }

    return (
        <LocationContext.Provider value={{
            locations, getLocations, addLocation, updateLocation, getLocationById
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}