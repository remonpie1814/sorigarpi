import React from "react";

import { Button, Text } from "components";

const SanctionHistoryColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1180px] w-full">
          <Button
            className="!text-white-A700 border-gray-400_03 border-l border-solid border-t cursor-pointer flex-1 font-bold font-inter h-[67px] text-[22px] text-center sm:text-lg md:text-xl w-full"
            shape="square"
            color="gray_600"
            size="2xl"
            variant="fill"
          >
            {props?.buttontext1}
          </Button>
          <div className="border-gray-400_03 border-l border-solid border-t flex flex-1 flex-col h-[67px] md:h-auto items-start justify-start max-w-[773px] w-full">
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
          <Button
            className="!text-white-A700 border-gray-400_03 border-l border-solid border-t cursor-pointer flex-1 font-bold font-inter h-[67px] text-[22px] text-center sm:text-lg md:text-xl w-full"
            shape="square"
            color="gray_600"
            size="2xl"
            variant="fill"
          >
            {props?.buttontext2}
          </Button>
          <div className="bg-white-A700_0f border-gray-400_03 border-l border-solid border-t flex flex-1 flex-col h-[67px] md:h-auto items-start justify-start max-w-[773px] w-full">
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
          <Button
            className="!text-white-A700 border-gray-400_03 border-l border-solid border-t cursor-pointer flex-1 font-bold font-inter h-[66px] text-[22px] text-center sm:text-lg md:text-xl w-full"
            shape="square"
            color="gray_600"
            size="xl"
            variant="fill"
          >
            {props?.buttontext3}
          </Button>
          <div className="border-gray-400_03 border-l border-solid border-t flex flex-1 flex-col h-[66px] md:h-auto items-start justify-start max-w-[773px] w-full">
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
          <Button
            className="!text-white-A700 border-gray-400_03 border-l border-solid border-t cursor-pointer flex-1 font-bold font-inter h-[67px] text-[22px] text-center sm:text-lg md:text-xl w-full"
            shape="square"
            color="gray_600"
            size="2xl"
            variant="fill"
          >
            {props?.buttontext4}
          </Button>
          <div className="border-gray-400_03 border-l border-solid border-t flex flex-1 flex-col h-[67px] md:h-auto items-start justify-start max-w-[773px] w-full">
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
  buttontext1: "항목",
  text1: "욕설/비방이 적힌 댓글",
  buttontext2: "내용",
  text2: "미칀룐이세욘 ㅋㅋ",
  buttontext3: "일시",
  text3: "2023-11-24 12:23",
  buttontext4: "상세 사유",
  text4: "왜인지 잘 아시죠",
};

export default SanctionHistoryColumn;
