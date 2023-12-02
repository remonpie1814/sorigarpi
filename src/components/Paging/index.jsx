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
            {props?.onclick}
          </Button>
          <Text
            className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
            size="txtInterMedium22Gray600"
          >
            {props?.numberone}
          </Text>
          <Text
            className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
            size="txtInterMedium22Gray600"
          >
            {props?.numbertwo}
          </Text>
          <Text
            className="text-[22px] sm:text-lg text-orange-400 md:text-xl tracking-[-0.42px] w-auto"
            size="txtInterMedium22Orange400"
          >
            {props?.numberthree}
          </Text>
          <Text
            className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
            size="txtInterMedium22Gray600"
          >
            {props?.numberfour}
          </Text>
          <Text
            className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
            size="txtInterMedium22Gray600"
          >
            {props?.numberfive}
          </Text>
          <Button
            className="!text-black-900 cursor-pointer font-inter font-medium h-[49px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px] w-[49px]"
            shape="square"
            color="gray_300"
            size="sm"
            variant="fill"
          >
            {props?.onclicktwo}
          </Button>
        </div>
      </div>
    </>
  );
};

Paging.defaultProps = {
  onclick: <>&lt;</>,
  numberone: "2",
  numbertwo: "3",
  numberthree: "4",
  numberfour: "5",
  numberfive: "6",
  onclicktwo: <>&gt;</>,
};

export default Paging;
