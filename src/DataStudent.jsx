import React from "react";
import PropTypes from "prop-types";
import { pluralize } from "./utils/pluralize";

const Data = ({ data }) => {
  const { firstName, lastName, yearOfBirth, portfolio } = data;
  const fullYears = new Date().getFullYear() - yearOfBirth;
  const years = pluralize(fullYears);
  return (
    <div>
      <p>
        <b>Имя</b>: {firstName}
      </p>
      <p>
        <b>Фамилия</b>: {lastName}
      </p>
      <p>
        <b>Год рождения</b>: {yearOfBirth} ({fullYears} {years})
      </p>
      <p>
        <b>Портфолио</b>: <a href={portfolio}>{portfolio}</a>
      </p>
    </div>
  );
};

Data.propTypes = {
  data: PropTypes.object,
};

export default Data;
