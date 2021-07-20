import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider.js"
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom"
import "./Employee.css"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        console.log("EmployeeList: useEffect - getEmployees")
        getEmployees()
    }, [])

    const history = useHistory()
    console.log("EmployeeList: Render", employees)
    return (
        <>
        <h2>Employees</h2>
        <button onClick={
            () => history.push("/employees/create")
        }>
            Hire Employee
        </button>

        <section className="employees">
            
            {
                employees.map(employee => {
                    return (
                        <div className="employee" id={`employee--${employee.id}`}>
                        <div className="employee__name">
                            <Link to={`/employees/detail/${employee.id}`}>
                                { employee.name }
                            </Link>
                        </div>
                            <div className="employee__location">
                            Location: { employee.location.address }
                            <br/>
                            Address: {employee.location.name}
                            </div>
                        </div>
                    )
                })
            }
        </section>
        </>
    )
}