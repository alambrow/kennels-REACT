import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import "./Employee.css"
import { useHistory, useParams } from 'react-router-dom';
import { EmployeeContext } from "./EmployeeProvider";

export const EmployeeForm = () => {
    const { addEmployee, updateEmployee, getEmployeeById } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
  
    const [ employee, setEmployee] = useState({})
    const [isLoading, setIsLoading] = useState(true)
  
    const { employeeId } = useParams()
    const history = useHistory();
    
    const handleControlledInputChange = (event) => {
      const newEmployee = { ...employee }
      newEmployee[event.target.id] = event.target.value 
      setEmployee(newEmployee)
    }
    
    const handleSaveEmployee = () => {
      if (parseInt(employee.locationId) === 0) {
        window.alert("Please select a location")
      } else {
          setIsLoading(true)

          if (employeeId) {
            updateEmployee({
              id: employee.id,
              name: employee.name,
              locationId: parseInt(employee.locationId)
            })
            .then(() => history.push(`/employees/detail/${employee.id}`))
          } else {
            addEmployee({
              name: employee.name,
              locationId: parseInt(employee.locationId)
            })
            .then(() => history.push("/employees"))
          }
        }
      }
    
    useEffect(() => {
      getLocations().then(() => {
        if (employeeId) {
          getEmployeeById(employeeId)
          .then(employee => {
            setEmployee(employee)
            setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])


    return (
      <form className="newEmployeeForm">
        <h2 className="employeeForm__title">New Employee</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Employee name:</label>
            <input type="text" id="name" required autoFocus className="form-control" placeholder="employee name" value={employee.name} 
            onChange={handleControlledInputChange} 
            value={employee.name}/>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Assign to location: </label>
            <select value={employee.locationId} id="locationId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a location</option>
              {locations.map(l => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>

        <button className="btn btn-primary" 
          disabled={isLoading}
          onClick={event => {
            event.preventDefault()
            handleSaveEmployee()
            }}>
          Save employee
        </button>
      </form>
    )
  }