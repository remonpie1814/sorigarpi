import React from "react";

import { Button, Text } from "components";

const SanctionHistoryColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1180px] w-full">
          <div
            className="flex justify-center items-center
            bg-gray-600 
            border-gray-400_03 border-l border-solid border-t
            !text-white-A700 font-bold font-inter h-[67px] text-[22px] text-center
            sm:text-lg md:text-xl w-1/2 md:w-full"
          >
            항목
          </div>
          <div className="border-gray-400_03 border-l border-solid border-t flex flex-1 flex-col h-[67px] md:h-auto items-start justify-start w-full">
            <div className="flex flex-col h-full items-center justify-center px-3 py-2.5 w-full">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtInterRegular16Black900"
              >
                {props?.text1}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1180px] w-full">
          <div
            className="flex justify-center items-center
            bg-gray-600 
            border-gray-400_03 border-l border-solid border-t
            !text-white-A700 font-bold font-inter h-[67px] text-[22px] text-center
            sm:text-lg md:text-xl w-1/2 md:w-full"
          >
            내용
          </div>
          <div className="bg-white-A700_0f border-gray-400_03 border-l border-solid border-t flex flex-1 flex-col h-[67px] md:h-auto items-start justify-start w-full">
            <div className="flex flex-col h-full items-center justify-center px-3 py-2.5 w-full">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtInterRegular16Black900"
              >
                {props?.text2}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 h-[66px] md:h-auto items-start justify-start max-w-[1180px] w-full">
          <div
            className="flex justify-center items-center
            bg-gray-600 
            border-gray-400_03 border-l border-solid border-t
            !text-white-A700 font-bold font-inter h-[67px] text-[22px] text-center
            sm:text-lg md:text-xl w-1/2 md:w-full"
          >
            일시
          </div>
          <div className="border-gray-400_03 border-l border-solid border-t flex flex-1 flex-col h-[66px] md:h-auto items-start justify-start w-full">
            <div className="flex flex-col h-full items-center justify-center px-3 py-2.5 w-full">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtInterRegular16Black900"
              >
                {props?.text3}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 h-[67px] md:h-auto items-start justify-start max-w-[1180px] w-full">
          <div
            className="flex justify-center items-center
            bg-gray-600 
            border-gray-400_03 border-l border-solid border-t
            !text-white-A700 font-bold font-inter h-[67px] text-[22px] text-center
            sm:text-lg md:text-xl w-1/2 md:w-full"
          >
            상세사유
          </div>
          <div className="border-gray-400_03 border-l border-solid border-t flex flex-1 flex-col h-[67px] md:h-auto items-start justify-start w-full">
            <div className="flex flex-col h-full items-center justify-center px-3 py-2.5 w-full">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtInterRegular16Black900"
              >
                {props?.text4}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SanctionHistoryColumn.defaultProps = {
  text1: "욕설/비방이 적힌 댓글",
  text2: "미칀룐이세욘 ㅋㅋ",
  text3: "2023-11-24 12:23",
  text4: "왜인지 잘 아시죠",
};

export default SanctionHistoryColumn;
