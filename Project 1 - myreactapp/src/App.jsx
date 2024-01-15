import React from "react";
import Details from "./Details";
// import Login from "./Login";
import Login2 from "./Login2";
import Cards from "./Cards";
// import CompA from "./Context/CompA";
import Routers from "./Routes";
import Navbar from "./Navbar";

const name = "Alisha";
const currDate = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
const name2 = "Rasleen";
const App = () => {
  return (
    <>
      {/* <Login2 /> */}
      <Cards />
      {/* <CompA /> */}
      {/* <Navbar />
      <Routers /> */}
    </>
  );
};
// const Hi=()=>{
//     return(
//         <>
//             <h3>React </h3>
//         </>
//     )
// }
export default App;
// export {Hi};
