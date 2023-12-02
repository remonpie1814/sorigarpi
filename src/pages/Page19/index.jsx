import React from "react";

import { Button, Img, Text } from "components";
import Row1 from "components/Row1";

const Page19 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-2.5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Row1
          className="bg-yellow-100 flex flex-row h-[50px] md:h-auto items-center justify-start max-w-[1920px] shadow-bs w-full"
          savebutton="효과음저장"
        />
        <div className="bg-white-A700 flex md:flex-col flex-row gap-5 h-full items-center justify-center md:px-10 sm:px-5 px-[60px] py-5 w-full">
          <div className="bg-gray-200_02 flex flex-1 flex-col h-[980px] md:h-auto items-center justify-center max-w-[666px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Img
                className="h-[872px] md:h-auto object-cover rounded-bl-[5px] rounded-br-[5px] w-full"
                src="images/img_image932.png"
                alt="image932"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-5 h-[980px] md:h-auto items-center justify-center max-w-[1103px] w-full">
            <div className="bg-gray-200_02 flex flex-col gap-5 h-full items-center justify-start p-5 w-full">
              <div className="flex flex-row gap-[59px] h-[93px] md:h-auto items-end justify-center w-auto">
                <div className="flex flex-col h-[60px] items-center justify-start p-[3px] w-[60px]">
                  <Img
                    className="h-[50px] md:h-auto object-cover w-[99%]"
                    src="images/img_image936_50x53.png"
                    alt="image936"
                  />
                </div>
                <Img
                  className="h-[60px] w-[60px]"
                  src="images/img_overflowmenu.svg"
                  alt="overflowmenu"
                />
                <div className="flex flex-col h-[60px] items-center justify-end p-1 w-[60px]">
                  <Img
                    className="h-[50px] md:h-auto object-cover w-[50px]"
                    src="images/img_image937.png"
                    alt="image937"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 h-20 md:h-auto items-center justify-start py-2.5 w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[15%] md:w-full">
                    <Img
                      className="h-9 md:h-auto object-cover w-9"
                      src="images/img_image900.png"
                      alt="image900"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-[3px]">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 tracking-[-0.53px]"
                      size="txtInterMedium28Gray900_1"
                    >
                      3:11 / 3:30
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[45px] items-center justify-center w-auto">
                    <Img
                      className="h-[42px] md:h-auto object-cover w-[42px]"
                      src="images/img_image866.png"
                      alt="image866"
                    />
                    <Img
                      className="h-[39px] md:h-auto object-cover w-[39px]"
                      src="images/img_image865.png"
                      alt="image865"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start px-2.5 w-full">
                  <Img
                    className="h-[94px] md:h-auto object-cover rounded w-full"
                    src="images/img_image883.png"
                    alt="image883"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[118px] sm:h-auto object-cover w-[1059px] md:w-full"
                    src="images/img_image935.png"
                    alt="image935"
                  />
                </div>
              </div>
            </div>
            <div className="bg-orange-50_01 flex flex-col items-center justify-start p-[18px] w-full">
              <Img
                className="h-[439px] md:h-auto object-cover w-[46%]"
                src="images/img_image934.png"
                alt="image934"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page19;
