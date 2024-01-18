import { useState, useEffect, useRef } from "react";

const Click = () => {
  // let count=0;
  const hasRun = useRef(false);
  const [count, setCount] = useState(0);
  const sumprop = () => {
    setCount(count + 1);
    // console.log(count);
    // count++;
    // console.log(count);
  };
  // const [count1, setCount1] = useState(10);
  // const decrement = () => {
  //   if (count1 <= 0) {
  //     alert("You cannot decrement further");
  //   } else {
  //     setCount1(count1 - 1);
  //   }
  // };

  // const [count2, setCount2] = useState(0);
  // const increment = () => {
  //   setCount2(count2 + 1);
  // };

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;
      return;
    } else {
      alert("State changed!");
    }
  }, [count]);

  return (
    <div className="Center">
      <div>{count}</div>
      <button onClick={sumprop}>Click Me</button>
      <br />
      {/* <div>{count2}</div>
      <button onClick={increment}>Increment value</button>
      <br />
      <div>{count1}</div>
      <button onClick={decrement}>Decrement Value</button> */}
      {/* <button onClick={()=>{setCount(count+1)}} >Click Me</button> */}
    </div>
  );
};

export default Click;
