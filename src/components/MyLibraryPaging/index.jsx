import React from "react";

import { Button, Text } from "components";

const MyLibraryPaging = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[33px] items-center justify-center md:px-10 sm:px-5 px-[82px] py-2 w-auto">
          <Button
            className="!text-black-900 cursor-pointer font-inter font-medium h-[49px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px] w-[49px]"
            shape="square"
            color="gray_300"
            size="md"
            variant="fill"
          >
            {props?.buttontext}
          </Button>
          <Text
            className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
            size="txtInterMedium22Gray600"
          >
            {props?.texttwo}
          </Text>
          <Text
            className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
            size="txtInterMedium22Gray600"
          >
            {props?.textthree}
          </Text>
          <Text
            className="text-[22px] sm:text-lg text-orange-400 md:text-xl tracking-[-0.42px] w-auto"
            size="txtInterMedium22Orange400"
          >
            {props?.textfour}
          </Text>
          <Text
            className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
            size="txtInterMedium22Gray600"
          >
            {props?.textfive}
          </Text>
          <Text
            className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
            size="txtInterMedium22Gray600"
          >
            {props?.textsix}
          </Text>
          <Button
            className="!text-black-900 cursor-pointer font-inter font-medium h-[49px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px] w-[49px]"
            shape="square"
            color="gray_300"
            size="md"
            variant="fill"
          >
            {props?.buttontext1}
          </Button>
        </div>
      </div>
    </>
  );
};

MyLibraryPaging.defaultProps = {
  buttontext: <>&lt;</>,
  texttwo: "2",
  textthree: "3",
  textfour: "4",
  textfive: "5",
  textsix: "6",
  buttontext1: <>&gt;</>,
};

export default MyLibraryPaging;
