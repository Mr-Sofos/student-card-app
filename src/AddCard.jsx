import React from "react";
import { useHistory } from "react-router-dom";

const ListCard = () => {
  const history = useHistory();
  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-6 m-auto">
          <h1>Карточка студента</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6 m-auto">нет данных</div>
      </div>
      <div className="row mt-3">
        <div className="col-6 m-auto">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => history.push("/card")}
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
