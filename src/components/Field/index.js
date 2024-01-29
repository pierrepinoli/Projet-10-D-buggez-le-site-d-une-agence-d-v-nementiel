import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./style.scss";

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
  INPUT_EMAIL: 3,
};

const Field = ({ type = FIELD_TYPES.INPUT_TEXT, label, name, placeholder, resetFields }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    // Réinitialise la valeur du champ lorsque resetFields change
    if (resetFields) {
      setValue("");
    }
  }, [resetFields]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  let component;

  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      component = (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          value={value}
          onChange={handleChange}
        />
      );
      break;
    case FIELD_TYPES.TEXTAREA:
      component = (
        <textarea
          name={name}
          data-testid="field-testid"
          value={value}
          onChange={handleChange}
        />
      );
      break;
    case FIELD_TYPES.INPUT_EMAIL:
      component = (
        <input
          type="email"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          value={value}
          onChange={handleChange}
        />
      );
      break;
    default:
      component = (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          value={value}
          onChange={handleChange}
        />
      );
  }

  return (
    <div className="inputField">
      <span>{label}</span>
      {component}
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  resetFields: PropTypes.bool,
};

Field.defaultProps = {
  label: "",
  placeholder: "",
  type: FIELD_TYPES.INPUT_TEXT,
  name: "field-name",
  resetFields: false,
};

export default Field;
