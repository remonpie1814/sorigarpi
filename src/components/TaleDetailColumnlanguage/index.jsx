import React from "react";

import { Text } from "components";

const TaleDetailColumnlanguage = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full">
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
              {props?.two}
            </Text>
            <Text
              className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
              size="txtInterMedium16"
            >
              {props?.three}
            </Text>
            <Text
              className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
              size="txtInterMedium16"
            >
              {props?.four}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

TaleDetailColumnlanguage.defaultProps = {
  language: "전체 ",
  two: "인기",
  three: "신작",
  four: "팔로우",
};

export default TaleDetailColumnlanguage;
