import React, { useState } from "react";
import { Outlet, useLocation, Link, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

export default function ProtectedRoute() {
  try {
    // console.log("Checking");
    const cookies = new Cookies();
    const token = cookies.get("TOKEN");
    // alert("Checking");
    if (token) {
      // alert(token);
      return (
        <>
          <Outlet />
        </>
      );
    } else {
      //   const location = useLocation();
      return <Navigate to="/login" />;
    }
  } catch (error) {
    console.error("Error in PrivateRoutes:", error);
    // Render fallback UI or error message
    return <p>Oops! Something went wrong.</p>;
  }
}

// import React from "react";
// import { Route, Link, Navigate } from "react-router-dom";
// import Cookies from "universal-cookie";
// const cookies = new Cookies();

// // Higher-order component that returns a Route
// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         // get cookie from browser if logged in
//         const token = cookies.get("TOKEN");

//         // returns route if there is a valid token set in the cookie
//         return token ? <Component {...props} /> : <Navigate to="/login" />;
//       }}
//     />
//   );
// };

// export default ProtectedRoute;
