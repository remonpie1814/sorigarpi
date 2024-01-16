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
              {props?.languagetext}
            </Text>
            <Text
              className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
              size="txtInterMedium16"
            >
              {props?.populartext}
            </Text>
            <Text
              className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
              size="txtInterMedium16"
            >
              {props?.newtext}
            </Text>
            <Text
              className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
              size="txtInterMedium16"
            >
              {props?.followtext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

TaleDetailColumnlanguage.defaultProps = {
  languagetext: "전체 ",
  populartext: "인기",
  newtext: "신작",
  followtext: "팔로우",
};

export default TaleDetailColumnlanguage;
