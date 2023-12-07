import React from "react";

import { Img, Text } from "components";

const Pagebuttons = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center w-auto">
          <Img
            className="h-10 md:h-auto object-cover w-10"
            src="images/img_image655.png"
            alt="image655"
          />
          <Text
            className="text-base text-center text-gray-900 w-auto"
            size="txtInterMedium16"
          >
            {props?.previoustext}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start">
          <Text
            className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px]"
            size="txtInterBold22"
          >
            {props?.pagenumber}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center w-auto">
          <Img
            className="h-10 md:h-auto object-cover w-10"
            src="images/img_image656.png"
            alt="image656"
          />
          <Text
            className="text-base text-center text-gray-900 w-auto"
            size="txtInterMedium16"
          >
            {props?.nexttext}
          </Text>
        </div>
      </div>
    </>
  );
};

Pagebuttons.defaultProps = {
  previoustext: "이전",
  pagenumber: "25 / 30",
  nexttext: "다음",
};

export default Pagebuttons;
