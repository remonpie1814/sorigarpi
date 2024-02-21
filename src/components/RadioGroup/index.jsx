import React from "react";
import PropTypes from "prop-types";

const RadioGroup = ({ label, children }) => {
  return (
    <fieldset className="w-3/5 sm:w-full">
      <legend>{label}</legend>
      <div className="border divide-y rounded border-slate-200 divide-slate-200">
        {children}
      </div>
    </fieldset>
  );
};

export { RadioGroup };
