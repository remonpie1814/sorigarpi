import React from "react";

import { Text } from "components";

const Navbar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row sm:gap-10 gap-[130px] items-start justify-start sm:px-5 px-[30px] w-auto sm:w-full">
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
            size="txtInterMedium16"
          >
            {props?.language}
          </Text>
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
            size="txtInterMedium16"
          >
            {props?.sixtyeight}
          </Text>
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
            size="txtInterMedium16"
          >
            {props?.sixtynine}
          </Text>
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
            size="txtInterMedium16"
          >
            {props?.seventy}
          </Text>
        </div>
      </div>
    </>
  );
};

Navbar.defaultProps = {
  language: "전체 ",
  sixtyeight: "인기",
  sixtynine: "신작",
  seventy: "팔로우",
};

export default Navbar;
