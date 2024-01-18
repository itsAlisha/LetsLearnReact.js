import React from "react";
import Calc2 from "./Calc2";

const name = "Rasleen";
const num1 = 5;
const num2 = 7;
const App2 = () => {
  return (
    <>
      <Calc2 name={name} num1={num1} num2={num2} />
    </>
  );
};
export default App2;
//Inside Calc
/*
const Calc2=(props)=>{
return(
    <h1>Hi i am {props.name}</h1>
    <h2>Add : {props.num1+props.num2}</h2>
    <h2>Sub : {props.num1-props.num2}</h2>
)
}
export default Calc2;
Fun Call(Attributes or props in form of User data)---->Func(In Another Component) and function does operations and returns values!
*/
