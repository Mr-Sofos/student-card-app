import React from "react";
import PropTypes from "prop-types";

const TextField = ({ onChange, type, name, label, value, error }) => {
  const getInputClasses = () => `form-control ${error ? "is-invalid" : ""}`;
  return (
    <div className="mb-4">
      <label htmlFor={label}>{label}</label>
      <div className="form-group has-content">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={getInputClasses()}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

TextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default TextField;
