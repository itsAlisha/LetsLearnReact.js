import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchingData = () => {
  const [userData, setData] = useState([]); //empty array

  useEffect(() => {
    const fetch = async () => {
      try {
        const d = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(d.data);
        setData(d.data);
      } catch (err) {
        console.log("No data found");
      }
    };
    fetch();
  }, []);

  return (
    <>
      <div>Hello</div>
      {userData.map((val, key) => {
        return (
          <>
            <h1>{val.id}</h1>
            <h1>
              Name: {val.name} <span> Email : {val.email}</span>
            </h1>
          </>
        );
      })}
    </>
  );
};

export default FetchingData;
