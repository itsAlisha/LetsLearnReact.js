// import igpic from "./pictures/ig.png";
// import capic from "./pictures/captcha.jpg";

import { useState } from "react";

const Login2 = () => {
  const [fields, setFields] = useState({
    name: "",
    pass: "",
  });

  const changeField = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const { name, value } = e.target;
    setFields((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
      // if (name === "username") {
      //   return {
      //     name: value,
      //     pass: prevalue.pass,
      //   };
      // } else {
      //   return {
      //     name: prevalue.name,
      //     pass: value,
      //   };
      // }
    });
  };

  return (
    <>
      <h1>
        {fields.pass} Instagram {fields.name}
      </h1>
      <br />

      <div className="row1">
        <div className="col1">
          {/* <img src={igpic} alt="Instagram image" /> */}
        </div>

        <div className="col2">
          <form>
            <div className="mb-3">
              <label for="exampleInputUser" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="exampleInputUser "
                value={fields.name}
                placeholder="Enter Username"
                onChange={changeField}
              />
              {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1 value"
                name="pass"
                value={fields.pass}
                placeholder="Enter Password"
                onChange={changeField}
              />
            </div>
            <div className="mb-3 form-check">
              {/* <input type="text" className="form-control" id="exampleCaptcha"/> */}
              {/* <img src={capic} alt="Captcha" className="imgg"/> */}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login2;
