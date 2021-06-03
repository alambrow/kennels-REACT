import React, { useContext, useState, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import { useHistory, useParams } from 'react-router-dom';

export const LocationForm = () => {
    const { locations, addLocation, getLocations, updateLocation, getLocationById } = useContext(LocationContext)
    const [ location, setLocation ] = useState({employees: [], animals: []})
    const [isLoading, setIsLoading] = useState(true)
    
    const { locationId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newLocation = { ...location }
        newLocation[event.target.name] = event.target.value
        setLocation(newLocation)
    }

    const handleSaveLocation = () => {
        setIsLoading(true)
        if (locationId) {
            // TODO: invoke updateLocation or addLocation (from provider)
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
            <input type="text" id="name" required autoFocus className="form-control" placeholder="location name" value={location.name} onChange={handleControlledInputChange} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Location address:</label>
            <input type="text" id="address" required autoFocus className="form-control" placeholder="location address" value={location.address} onChange={handleControlledInputChange} />
          </div>
        </fieldset>
        <button className="btn btn-primary" onClick={handleSaveLocation}>
          Save location
        </button>
        </form>
    )
}