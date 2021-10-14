import React, { useEffect, useState } from "react";
import TextField from "./TextField";
import { validator } from "./utils/validator";

const Card = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    year: "",
    portfolio: "",
  });

  const [errors, setErros] = useState({});

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validatorConfig = {
    firstName: {
      isRequired: {
        message: "Имя обязательно должно быть заполнено",
      },
    },
    lastName: {
      isRequired: {
        message: "Фамилия обязательно должно быть заполнено",
      },
    },
    year: {
      isRequired: {
        message: "Год рождения должно быть заполнено",
      },
      isCorrectYear: {
        message: "Год введен не корректно",
        dateNow: new Date().getFullYear(),
      },
    },
    portfolio: {
      isRequired: {
        message: "Портфолио обязательно должно быть заполнено",
      },
      isUrl: {
        message: "Портфолио должна быть ссылкой",
      },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErros(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-6 m-auto">
          <h1>Создать</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Имя"
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />
            <TextField
              label="Фамилия"
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />
            <TextField
              label="Год рождения"
              type="text"
              name="year"
              value={data.year}
              onChange={handleChange}
              error={errors.year}
            />
            <TextField
              label="Портфолио"
              type="text"
              name="portfolio"
              value={data.portfolio}
              onChange={handleChange}
              error={errors.portfolio}
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!isValid}
            >
              Создать
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Card;
