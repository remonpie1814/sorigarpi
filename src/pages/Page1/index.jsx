import React from "react";

import { Img, Line, Text } from "components";

const Page1 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-center mx-auto shadow-bs w-auto sm:w-full md:w-full">
        <div className="bg-yellow-100 flex flex-col h-[65px] md:h-auto items-end justify-center max-w-[1170px] shadow-bs w-full">
          <div className="flex flex-col items-center justify-start md:px-5">
            <Text
              className="text-[22px] text-center text-gray-600 sm:text-lg md:text-xl tracking-[-0.24px] w-full"
              size="txtInterMedium22"
            >
              신데렐라는 어려서
            </Text>
          </div>
        </div>
        <div className="bg-blue_gray-100 h-[499px] md:px-5 w-[39%]"></div>
        <div className="h-[62px] md:px-5 relative w-[41%] sm:w-full">
          <div className="h-[62px] m-auto w-full">
            <div className="h-[62px] m-auto rounded-md w-full"></div>
            <div className="absolute flex sm:flex-col flex-row sm:gap-5 h-max inset-[0] items-center justify-center m-auto w-[98%]">
              <Line className="bg-yellow-200 h-[3px] w-[86%]" />
              <Line className="bg-white-A700 h-[3px] w-[14%]" />
            </div>
          </div>
          <div className="absolute bottom-[15%] h-[34px] right-[14%] w-[4%]"></div>
        </div>
        <div className="flex flex-row gap-[25px] items-center justify-center md:px-5 w-[29%] md:w-full">
          <div className="flex flex-col items-center justify-start w-1/4">
            <Img
              className="h-[81px] md:h-auto object-cover w-[81px]"
              src="images/img_image589_81x81.png"
              alt="image589"
            />
            <Text
              className="mt-0.5 text-base text-gray-900 tracking-[-0.30px]"
              size="txtInterMedium16Gray900"
            >
              정지
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-[69%]">
            <div className="flex flex-col gap-[11px] items-center justify-start w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <Img
                  className="h-16 md:h-auto object-cover w-16"
                  src="images/img_image655.png"
                  alt="image655"
                />
                <Text
                  className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.46px]"
                  size="txtInterBold24"
                >
                  25 / 30
                </Text>
                <Img
                  className="h-16 md:h-auto object-cover w-16"
                  src="images/img_image656.png"
                  alt="image656"
                />
              </div>
              <div className="flex flex-row items-center justify-between w-[54%] md:w-full">
                <Text
                  className="text-base text-gray-900 tracking-[-0.30px]"
                  size="txtInterMedium16"
                >
                  이전
                </Text>
                <Text
                  className="text-base text-gray-900 tracking-[-0.30px]"
                  size="txtInterMedium16"
                >
                  다음
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
