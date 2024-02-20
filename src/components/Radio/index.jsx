import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";
import checked from "../../assets/images/check.png";

const variants = {
  fill: { white_A700: "bg-white-A700 text-gray-900" },
  outline: { gray_600_01: "border-2 border-gray-600_01 border-solid" },
};
const shapes = { round: "rounded-[5px]" };
const sizes = { xs: "pb-px pt-0.5 px-px", sm: "pb-3.5 pr-3.5 pt-[15px]" };

const Radio = React.forwardRef(
  (
    {
      inputClassName = "",
      className = "",
      name = "",
      children,
      value = "",
      errors = [],
      shape = "",
      size = "",
      variant = "",
      color = "",
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
        <div className={className}>
          <label htmlFor={id} className="w-full label-checked">
            <input
              type="radio"
              name="option"
              id={id}
              value="3"
              className="hidden peer"
            />
            <span
              className="inline-block h-[22px] mr-[5px] w-[22px] rounded-[5px] pb-px pt-0.5 px-px border-2 border-gray-600_01 border-solid peer-checked:border-yellow-200 peer-checked:bg-yellow-200 peer-checked:
            "
            >
              <img src={checked} />
            </span>
            <span className="align-top ">{children}</span>
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
  name: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["white_A700", "gray_600_01"]),
};

export { Radio };
