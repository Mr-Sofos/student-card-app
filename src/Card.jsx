import React, { useState } from "react";
import TextField from "./TextField";

const Card = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    year: "",
    portfolio: "",
  });
  console.log(data, setData);
  const handleChange = ({ target }) => {
    console.log(target);
  };

  const handleSubmit = (e) => {};

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 m-auto">
          <h1>Создать</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              label="name"
              type="text"
              value={data.firstName}
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Card;
