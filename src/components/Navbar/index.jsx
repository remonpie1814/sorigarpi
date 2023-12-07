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
            {props?.fiftythree}
          </Text>
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
            size="txtInterMedium16"
          >
            {props?.fiftyfour}
          </Text>
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
            size="txtInterMedium16"
          >
            {props?.fiftyfive}
          </Text>
        </div>
      </div>
    </>
  );
};

Navbar.defaultProps = {
  language: "전체 ",
  fiftythree: "인기",
  fiftyfour: "신작",
  fiftyfive: "팔로우",
};

export default Navbar;
