import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider.js"
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom"
import "./Location.css"

// TODO: add no. of employees and animals
export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
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
            {
                locations.map(location => {
                    return (
                        <div className="location" id={`location--${location.id}`} key={`${location.id}`}>
                        <div className="location__name" >
                          <Link to={`/locations/detail/${location.id}`}>
                            { location.name }
                          </Link>
                        </div>
                        <div className="location__address">
                          Address: { location.address }
                        </div>
                        <div>
                            Unknown No. of Employees
                        </div>
                        <div>
                            Unknown No. of Animals
                        </div>
                        </div>
                    )
                })
            }
        </section>
        </>
    )
}