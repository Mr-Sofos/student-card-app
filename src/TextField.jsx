import React from "react";

const TextField = ({ onChange, type, name, label, value }) => {
  const getInputClasses = () => `form-control ${false ? "is-invalid" : ""}`;
  return (
    <div className="mb-4">
      <label htmlFor={label}>{label}</label>
      <div className="form-group has-content">
        <input
          type="text"
          id="name"
          name="name"
          className={getInputClasses()}
        />
        <div className="invalid-feedback">Поле "Имя" должно быть заполнено</div>
      </div>
      <button type="submit" className="btn btn-primary">
        Создать
      </button>
    </div>
  );
};

export default TextField;
