import React from "react";
import PropTypes from "prop-types";

const RadioGroup = ({ label, children }) => {
  return (
    <fieldset>
      <legend>{label}</legend>
      {children}
    </fieldset>
  );
};

export { RadioGroup };
