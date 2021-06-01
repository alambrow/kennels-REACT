import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider.js"
import { useHistory } from 'react-router-dom'
import "./Location.css"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        console.log("LocationList: useEffect - getLocations")
        getLocations()
    }, [])

    const history = useHistory()

    return (
        <>
        <h2>Locations</h2>
        <button onClick={
            () => history.push("/locations/create")
        }>
            Add Location
        </button>
        <section className="locations">
            {console.log("LocationList: Render", locations)}
            {
                locations.map(location => {
                    return (
                        <div className="location" id={`location--${location.id}`}>
                        <div className="location__name">
                          Name: { location.name }
                        </div>
                        <div className="location__address">
                          Address: { location.address }
                        </div>
                        </div>
                    )
                })
            }
        </section>
        </>
    )
}