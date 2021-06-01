import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

// Link tag here (comes from React) changes the URL to value of the "to" attribute
export const NavBar = (props) => {
    return (
    <ul className="navbar">
        <li className="navbar__item active">
            <Link className="navbar__link" to="/">NSS Kennels</Link>
        </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/locations">Locations</Link>
        </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/animals">Animals</Link>
        </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/customers">Customers</Link>
        </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/employees">Employees</Link>
        </li>
    </ul>
    )
}