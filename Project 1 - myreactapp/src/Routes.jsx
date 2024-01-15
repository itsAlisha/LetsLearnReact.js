import React from "react";
import Cards from "./Cards";
import Login2 from "./Login2";
import Card from "./Card";
import AboutUs from "./AboutUs";
import Services from "./Services";
import { Routes, Route } from "react-router-dom";
import Error from "./Error";
import User from "./User";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Login2} />
        <Route exact path="/cards" Component={Cards} />
        <Route exact path="/about" Component={AboutUs} />
        <Route exact path="/services" Component={Services} />
        <Route path="/users/:name" Component={User} />
        <Route path="*" Component={Error} />
      </Routes>
    </>
  );
};

export default Routers;
