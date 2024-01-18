import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
// import { DeleteIcon } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";

const PostingData = () => {
  const data = {
    name: "",
    uname: "",
    email: "",
    id: "",
  };

  const [userData, setData] = useState(data);

  const handleChange = (e) => {
    setData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const d = await axios.post(
        `https://jsonplaceholder.typicode.com/users`,
        userData
      );
      console.log(d);
    } catch (err) {
      console.log("cannot post the data");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const d = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${userData.id}`,
      userData
    );
    console.log(d);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const d = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${userData.id}`
    );
    console.log(d);
  };

  return (
    <>
      <form>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        ></input>
        <br />
        <label>Username: </label>
        <input
          type="text"
          name="uname"
          value={userData.uname}
          onChange={handleChange}
        ></input>
        <br />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        ></input>
        <br />
        <label>Id: </label>
        <input
          type="number"
          name="id"
          value={userData.id}
          onChange={handleChange}
        ></input>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <br />
        <button onClick={handleUpdate}> Update</button>
        <br />
        {/* <button onClick={handleDelete}> Delete</button> */}
        <Button variant="contained" onClick={handleDelete}>
          <DeleteIcon />
        </Button>
        {/* <DeleteIcon onClick={handleDelete}>Delete</DeleteIcon> */}
      </form>
    </>
  );
};

export default PostingData;
