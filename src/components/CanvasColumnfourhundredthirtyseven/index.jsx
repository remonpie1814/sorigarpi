import React from "react";

import { Img, Text } from "components";

const CanvasColumnfourhundredthirtyseven = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2.5 items-center justify-center w-full">
          <Img
            className="h-[29px] md:h-auto object-cover w-[27px]"
            src="images/img_image661.png"
            alt="image661"
          />
          <Text
            className="text-base text-gray-900 w-auto"
            size="txtInterMedium16Gray900"
          >
            {props?.text437}
          </Text>
          <Img
            className="h-[33px] md:h-auto object-cover w-[30px]"
            src="images/img__33x30.png"
            alt="FourHundredThirtyEight"
          />
          <Text
            className="text-base text-gray-900 w-auto"
            size="txtInterMedium16Gray900"
          >
            {props?.text439}
          </Text>
        </div>
        <div className="flex flex-row gap-5 h-9 md:h-auto items-center justify-center px-5 w-full">
          <Img
            className="h-[30px] md:h-auto object-cover w-[30px]"
            src="images/img_image689_30x30.png"
            alt="image689_One"
          />
          <div className="flex flex-row items-center justify-center w-[34px]">
            <Text
              className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray900_1"
            >
              {props?.textone}
            </Text>
            <Text
              className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray900_1"
            >
              {props?.text440}
            </Text>
            <Text
              className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray900_1"
            >
              {props?.texteight}
            </Text>
          </div>
          <Img
            className="h-[30px] md:h-auto object-cover w-[30px]"
            src="images/img_image690_30x30.png"
            alt="image690_One"
          />
        </div>
      </div>
    </>
  );
};

CanvasColumnfourhundredthirtyseven.defaultProps = {
  text437: "페이지 삭제",
  text439: "페이지 추가",
  textone: "1",
  text440: "/",
  texteight: "8",
};

export default CanvasColumnfourhundredthirtyseven;
