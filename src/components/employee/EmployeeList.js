import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider.js"
import { useHistory } from 'react-router-dom'
import "./Employee.css"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        console.log("EmployeeList: useEffect - getEmployees")
        getEmployees()
    }, [])

    const history = useHistory()

    return (
        <>
        <h2>Employees</h2>
        <button onClick={
            () => history.push("/employees/create")
        }>
            Hire Employee
        </button>
        <section className="employees">
            {console.log("EmployeeList: Render", employees)}
            {
                employees.map(employee => {
                    return (
                        <div className="employee" id={`employee--${employee.id}`}>
                        <div className="employee__name">
                          Name: { employee.name }
                        </div>
                        <div className="employee__location">
                          Location: { employee.locationId }
                        </div>
                        </div>
                    )
                })
            }
        </section>
        </>
    )
}