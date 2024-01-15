const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.imgsrc} alt="dish" />
        <h3>{props.fname}</h3>
        <a href={props.recipe}>Link to the receipe</a>
      </div>
    </>
  );
};

export default Card;
//Orientation
