import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>This is About Us Page.</div>
      <button onClick={() => navigate("/services")}>Go To services Page</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default AboutUs;
