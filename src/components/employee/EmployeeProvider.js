import React, {useState, createContext} from "react"

export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=location")
        .then (res => res.json())
        .then (setEmployees)
    }

    const addEmployee = employObj => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employObj)
        })
        .then(getEmployees)
    }

    const updateEmployee = employObj => {
        return fetch(`http://localhost:8088/employees/${employObj.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employObj)
        })
        .then(res => res.json())
        .then(getEmployees)
    }

    const getEmployeeById = employId => {
        return fetch(`http://localhost:8088/employees/${employId}`)
        .then (res => res.json())
    }

    return (
        <EmployeeContext.Provider value={{
            employees, getEmployees, addEmployee, updateEmployee, getEmployeeById
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}