import React from "react";

import { Button, Text } from "components";

const Paging = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[33px] items-center justify-center md:px-10 sm:px-5 px-[82px] py-2 w-auto">
          <Button
            className="!text-black-900 cursor-pointer font-inter font-medium h-[49px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px] w-[49px]"
            shape="square"
            color="gray_300"
            size="sm"
            variant="fill"
          >
            {props?.eightbutton}
          </Button>
          <Text
            className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
            size="txtInterMedium22Gray600"
          >
            {props?.twotext}
          </Text>
          <Text
            className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
            size="txtInterMedium22Gray600"
          >
            {props?.threetext}
          </Text>
          <Text
            className="text-[22px] sm:text-lg text-orange-400 md:text-xl tracking-[-0.42px] w-auto"
            size="txtInterMedium22Orange400"
          >
            {props?.fourtext}
          </Text>
          <Text
            className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
            size="txtInterMedium22Gray600"
          >
            {props?.fivetext}
          </Text>
          <Text
            className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
            size="txtInterMedium22Gray600"
          >
            {props?.sixtext}
          </Text>
          <Button
            className="!text-black-900 cursor-pointer font-inter font-medium h-[49px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px] w-[49px]"
            shape="square"
            color="gray_300"
            size="sm"
            variant="fill"
          >
            {props?.ninebutton}
          </Button>
        </div>
      </div>
    </>
  );
};

Paging.defaultProps = {
  eightbutton: <>&lt;</>,
  twotext: "2",
  threetext: "3",
  fourtext: "4",
  fivetext: "5",
  sixtext: "6",
  ninebutton: <>&gt;</>,
};

export default Paging;
