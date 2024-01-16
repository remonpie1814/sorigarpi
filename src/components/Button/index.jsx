import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[5px]", square: "rounded-none" };
const variants = {
  outline: {
    amber_A100: "border-amber-A100 border-b-[5px] border-solid text-gray-900",
    blue_gray_100_01:
      "border-b-2 border-blue_gray-100_01 border-solid text-black-900",
  },
  fill: {
    black_900_60: "bg-black-900_60",
    blue_gray_50: "bg-blue_gray-50 text-black-900",
    blue_gray_100_02: "bg-blue_gray-100_02",
    blue_gray_100_01: "bg-blue_gray-100_01 text-black-900",
    yellow_200: "bg-yellow-200 text-black-900",
    gray_100: "bg-gray-100 text-black-900",
    gray_600: "bg-gray-600",
    amber_A100: "bg-amber-A100 text-black-900",
    blue_gray_100: "bg-blue_gray-100 text-black-900",
    gray_300: "bg-gray-300",
  },
};
const sizes = {
  xs: "p-1",
  sm: "p-2",
  md: "p-[11px]",
  lg: "p-3.5",
  xl: "p-[17px]",
  "2xl": "p-5",
  "3xl": "p-[23px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "amber_A100",
    "blue_gray_100_01",
    "black_900_60",
    "blue_gray_50",
    "blue_gray_100_02",
    "yellow_200",
    "gray_100",
    "gray_600",
    "blue_gray_100",
    "gray_300",
  ]),
};

export { Button };
