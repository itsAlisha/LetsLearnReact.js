import Card from "./Card";
import Fdata from "./constansts/Fdata";

const Cards = () => {
  return (
    <>
      <h1>Various Dishes</h1>
      {Fdata.map((val, key) => {
        //FData se card me
        return (
          <Card
            key={val.id}
            imgsrc={val.imgsrc}
            fname={val.fname}
            recipe={val.recipe}
          />
        );
      })}
    </>
  );
};
//  Fdata.map((val)=>{return()})
export default Cards;
