//** 필요 없는 props 제거, 보더 제거, 이름을 Navbar로 변경 */
import React from "react";

import { Text } from "components";

const Navbar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full border-b-[1px] border-b-blue_gray-100 p-2">
          <div
            className="flex flex-row w-auto gap-[130px] items-center justify-center px-[30px]
                      sm:px-5 sm:gap-10 sm:w-full"
          >
            <Text
              className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
              size="txtInterMedium16"
            >
              전체
            </Text>
            <Text
              className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
              size="txtInterMedium16"
            >
              인기
            </Text>
            <Text
              className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
              size="txtInterMedium16"
            >
              신작
            </Text>
            <Text
              className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
              size="txtInterMedium16"
            >
              팔로우
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
