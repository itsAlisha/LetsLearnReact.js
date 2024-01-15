

const cssStyle={
    backgroundColor: "yellow",
}

const Details =(props)=>{
    return (
        <>
            <h1>Hello everyone</h1>
            <h2  className="heading">My name is {props.n}</h2>
            <h2  >Today's Date is {props.cDate}</h2>
            <h3>Today's Time is {props.cTime} </h3>
        </>
    )
}

export default Details;