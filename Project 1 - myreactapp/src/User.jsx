import React from "react";
import { useLocation, useParams } from "react-router-dom";

const User = () => {
  const { name, lname } = useParams();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>
        User {name} {lname} Page
      </h1>
      {location.pathname === "/users/admin_admin" ? (
        <h1>Admin dashboard</h1>
      ) : (
        <>
          <h2>{location.pathname}</h2>
        </>
      )}
    </>
  );
};

export default User;
