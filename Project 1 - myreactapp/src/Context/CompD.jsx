import React, { useContext } from "react";
import { Username } from "./CompA";

const CompD = () => {
  const id = useContext(Username);
  return (
    <>
      <h1> Hi this is {id}</h1>
      {/* <button onClick={() => setText("Hi, React")}>Click Me</button> */}
    </>
  );
};

export default CompD;
