import React from "react";
import { useHistory } from "react-router-dom";

import DataStudent from "./DataStudent";

const AddCard = () => {
  const history = useHistory();
  const data = JSON.parse(localStorage.getItem("data"));
  const isData = data?.firstName;

  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-6 m-auto">
          <h1>Карточка студента</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6 m-auto">
          {isData ? <DataStudent data={data} /> : "нет данных"}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6 m-auto">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => history.push("/card")}
          >
            {isData ? "Редактировать" : "Добавить"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
