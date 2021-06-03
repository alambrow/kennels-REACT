import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import { useParams } from "react-router-dom"
import "./Location.css"

export const LocationDetail = () => {
    const { locations } = useContext(LocationContext)
    const [ location, setLocation ] = useState({employees: [], animals: []})
    const { locationId } = useParams()

    useEffect(() => {
        const thisLocation = locations.find(a => a.id === parseInt(locationId)) || {employees: [], animals: []}
        setLocation(thisLocation)
    }, [locationId])

 
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
        </section>
    )
}