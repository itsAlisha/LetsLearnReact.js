// import igpic from "./pictures/ig.png";
// import capic from "./pictures/captcha.jpg";

import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [pass, setpass] = useState("");
  const [bname, submit] = useState("");
  const [bpass, bsubmit] = useState("");

  const changeprop = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    setName(event.target.value);
  };
  const addpassword = (event) => {
    setpass(event.target.value);
  };
  const Buttonpressed = (event) => {
    event.preventDefault();
    alert(`Username = ${name} password = ${pass}`);
    submit(name);
    bsubmit(pass);
  };
  return (
    <>
      <h1>
        {bpass} Instagram {bname}
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
                name="username"
                value={name}
                id="exampleInputUser "
                placeholder="Enter Username"
                onChange={changeprop}
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
                name="Password"
                placeholder="Enter Password"
                onChange={addpassword}
              />
            </div>
            <div className="mb-3 form-check">
              {/* <input type="text" className="form-control" id="exampleCaptcha"/> */}
              {/* <img src={capic} alt="Captcha" className="imgg"/> */}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={Buttonpressed}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
