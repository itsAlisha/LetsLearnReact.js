import React, { createContext, useState } from "react";
import CompB from "./CompB";

const Username = createContext();
const MyContext = createContext();
const CompA = () => {
  const [title, setTitle] = useState("Hi");

  return (
    <>
      <Username.Provider value={"Alisha"}>
        <MyContext.Provider value={{ title, setTitle }}>
          <CompB />
        </MyContext.Provider>
      </Username.Provider>
    </>
  );
};

export default CompA;
export { Username, MyContext };

// CompA { Username, MyContext }(Hidden Data)
//   |
// CompB
//   |
// CompC {MyContext}
//   |
// CompD {Username}
