import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import { useParams, useHistory } from "react-router-dom"
import "./Location.css"

export const LocationDetail = () => {
    const { locations, getLocationById } = useContext(LocationContext)
    const [ location, setRemoteLocation ] = useState({employees: [], animals: []})
    const { locationId } = useParams()

    useEffect(() => {
        if (locationId) {
            getLocationById(locationId).then( (locationData) => {
                setRemoteLocation(locationData)
            })
        } else {
            setRemoteLocation(location)
        }
    }, [locationId])

    const history = useHistory()
 
    return (
        <section className="location" key={location.id}>
            <h3 className="location__name"> {location.name} </h3>
            <div className="location__address"> {location.address} </div>
            <div className="location__employees"> 
            <h3>Employees: </h3>
                {location.employees.map(employee =>
                    <div className="location__employee__name"> {employee.name} </div>
                )}
            </div>
            <div className="location__animals">
                <h3>Animal Customers:</h3>
                {location.animals.map(animal =>
                    <div className="location__animal__name"> {animal.name} </div>    
                )}
            </div>
            <button onClick={() => {
                history.push(`/locations/edit/${location.id}`)
            }}>Edit</button>
        </section>
    )
}