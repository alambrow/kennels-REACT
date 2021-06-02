import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import { useParams } from "react-router-dom"
import "./Location.css"

export const LocationDetail = () => {
    const { locations } = useContext(LocationContext)
    const [ location, setLocation ] = useState({employees: [], animals: []})
    const { locationId } = useParams()


    useEffect(() => {
        const thisLocation = locations.find(a => a.id === parseInt(locationId))
        setLocation(thisLocation)
    }, [locationId])

    return (
        <section className="location">
            <h3>{location.name}</h3>
            <div className="location__address">{location.address}</div>
        </section>
    )

}