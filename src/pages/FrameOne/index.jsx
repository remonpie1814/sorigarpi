import React from "react";

import { Img, Text } from "components";

const FrameOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-amber-A100 flex flex-row md:gap-10 items-center justify-between px-3 w-full">
          <div className="flex flex-col items-center justify-start ml-[7px] md:px-5">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInterRegular24"
            >
              소리갈피
            </Text>
          </div>
          <div className="flex flex-row gap-3 items-start justify-start md:px-5 w-auto">
            <Img
              className="h-[35px] md:h-auto object-cover w-[35px]"
              src="images/img__30x30.png"
              alt="image916"
            />
            <Img
              className="h-[39px] md:h-auto object-cover w-[39px]"
              src="images/img_image914.png"
              alt="image914"
            />
            <Img
              className="h-7 md:h-auto object-cover w-7"
              src="images/img_image915.png"
              alt="image915"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameOnePage;
