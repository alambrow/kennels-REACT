import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Kennel.css";

export const Kennel = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("kennel_customer")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);


// import { AnimalProvider } from "./animal/AnimalProvider.js"
// import { AnimalList } from "./animal/AnimalList.js"
// import { EmployeeProvider } from "./employee/EmployeeProvider.js"
// import { EmployeeList } from "./employee/EmployeeList.js"
// import { LocationProvider } from "./location/LocationProvider.js"
// import { LocationList } from "./location/LocationList.js"
// import { CustomerProvider } from "./customer/CustomerProvider.js"
// import { CustomerList } from "./customer/CustomerList.js"

// export const Kennel = () => (
//     <>
//         <h2>Nashville Kennels</h2>
//         <small>Loving care when you're not there.</small>
//         <address>
//             <div>Visit Us at the Nashville North Location</div>
//             <div>500 Puppy Way</div>
//         </address>

//         <h2>Animals</h2>
//         <article className="animals">
//         <AnimalProvider>
//             <AnimalList />
//         </AnimalProvider>
//         </article>

//         <h2>Employees</h2>
//         <article className="employees">
//         <EmployeeProvider>
//             <EmployeeList />
//         </EmployeeProvider>
//         </article>

//         <h2>Locations</h2>
//         <article className="locations">
//         <LocationProvider>
//             <LocationList />
//         </LocationProvider>
//         </article>

//         <h2>Customers</h2>
//         <article className="customers">
//         <CustomerProvider>
//             <CustomerList />
//         </CustomerProvider>
//         </article>
//     </>
// )