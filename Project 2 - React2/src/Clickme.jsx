import { useRef, useState, useEffect } from "react";

const Clickme = () => {
  const [value, changevalue] = useState(0);

  const buttonpressed = () => {
    changevalue(value + 5);
  };
  const hasRun = useRef(false);

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;
    } else {
      alert("State changed!");
    }
  }, [value]);

  return (
    <>
      <div>{value}</div>
      <button onClick={buttonpressed}>Click me</button>
    </>
  );
};
export default Clickme;
