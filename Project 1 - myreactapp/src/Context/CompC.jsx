import React, { useContext } from "react";
import CompD from "./CompD";
import { MyContext } from "./CompA";

const CompC = () => {
  const { title, setTitle } = useContext(MyContext);
  return (
    <>
      <h2>{title}</h2>
      <button onClick={() => setTitle("Hi, React")}>Click Me</button>
      <CompD />
    </>
  );
};

export default CompC;
