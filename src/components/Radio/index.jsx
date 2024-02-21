import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";
import "../../styles/radio.module.css";

const Radio = React.forwardRef(
  (
    {
      inputClassName = "",
      className = "",
      comment = "",
      commentClassName = "",
      name = "",
      children,
      value = "",
      errors = [],
      size = "",
      id = "",
      onchange,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onchange) onchange(e?.target?.checkd);
    };

    return (
      <>
        <div>
          <label htmlFor={id} className={className}>
            <input
              type="radio"
              name="option"
              id={id}
              value="3"
              className={inputClassName}
            />
            <div className="align-top ">
              <span>{children}</span>
              <div className={commentClassName}>{comment}</div>
            </div>
          </label>
        </div>
        <ErrorMessage errors={errors} />
      </>
    );
  }
);

Radio.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  comment: PropTypes.string,
  commentClassName: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm"]),
};

export { Radio };
