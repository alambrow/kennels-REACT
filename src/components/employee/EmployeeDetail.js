import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { useParams, useHistory } from "react-router-dom"
import "./Employee.css"

export const EmployeeDetail = () => {
    const { getEmployeeById } = useContext(EmployeeContext)
    const [ employee, setRemoteEmployee ] = useState({location: {}})
    const { employeeId } = useParams()

    useEffect(() => {
        if (employeeId) {
            getEmployeeById(employeeId).then( (employeeData) => {
                setRemoteEmployee(employeeData)
            })
        } else {
            setRemoteEmployee(employee)
        }
    }, [employeeId])

    const history = useHistory()
    return (
        <section className="employee">
            <h3 className="employee__name"> {employee.name} </h3>
            <div className="employee__location"> Location: {employee.location.name} </div>
            <button onClick={() => {
                history.push(`/employees/edit/${employee.id}`)
            }}>Edit</button>
        </section>
    )
}