import React from "react";

import { Text } from "components";

const FollowListNavbar = (props) => {
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
            {props?.fortysix}
          </Text>
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
            size="txtInterMedium16"
          >
            {props?.fortyseven}
          </Text>
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
            size="txtInterMedium16"
          >
            {props?.fortyeight}
          </Text>
        </div>
      </div>
    </>
  );
};

FollowListNavbar.defaultProps = {
  language: "전체 ",
  fortysix: "인기",
  fortyseven: "신작",
  fortyeight: "팔로우",
};

export default FollowListNavbar;
