import React, { useContext, useState, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import { useHistory, useParams } from 'react-router-dom';

export const LocationForm = () => {
    const { addLocation, getLocations, updateLocation, getLocationById } = useContext(LocationContext)
    
    const [ location, setLocation ] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    
    const { locationId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newLocation = { ...location }
        newLocation[event.target.id] = event.target.value
        setLocation(newLocation)
    }

    const handleSaveLocation = () => {
        if (locationId) {
            // invoke updateLocation, else addLocation (from provider)
            updateLocation({
                id: location.id,
                name: location.name,
                address: location.address
            })
            .then(() => history.push(`/locations/detail/${location.id}`))
        } else {
            addLocation({
              name: location.name,
              address: location.address
            })
            .then(() => history.push("/locations"))
        }
    }

    useEffect(() => {
        getLocations().then(() => {
            if (locationId) {
                getLocationById(locationId)
                .then(location => {
                    setLocation(location)
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
        })
    }, [])


    return (
        <form className="newlocationForm">
        <h2 className="locationForm__title">New location</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Location name:</label>
            <input type="text" id="name" className="form-control" required placeholder="location name" 
            onChange={handleControlledInputChange} 
            value={location.name}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Location address:</label>
            <input type="text" id="address" className="form-control" required placeholder="location address" 
            onChange={handleControlledInputChange} 
            value={location.address}/>
          </div>
        </fieldset>
        <button className="btn btn-primary" 
          disabled={isLoading}
          onClick={event => {
            event.preventDefault()
            handleSaveLocation()
            }}>
          Save location
        </button>
        </form>
    )
}