import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider.js"
import "./Customer.css"

export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        console.log("CustomerList: useEffect - getCustomers")
        getCustomers()
    }, [])
    console.log(customers, "customers")
    return (
        <section className="customers">
            {console.log("CustomerList: Render", customers)}
            {
                customers.map(customer => {
                    return (
                        <div className="customer" id={`customer--${customer.id}`}>
                        <div className="customer__name">
                          Name: { customer.full_name }
                        </div>
                        <div className="customer__address">
                          Address: { customer.address }
                        </div>
                        </div>
                    )
                })
            }
        </section>
    )
}