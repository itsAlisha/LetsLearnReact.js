const Calc = (props) => {
  return (
    <>
      <h1>My name is {props.name}</h1>
      <h2>
        Addition : {props.num1}+{props.num2}
      </h2>
      <h2>Difference : {props.num1 - props.num2}</h2>
    </>
  );
};
export default Calc;
