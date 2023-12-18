import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import CanvasColumnfourhundredseve from "components/CanvasColumnfourhundredseve";
import CanvasRowthumbsup from "components/CanvasRowthumbsup";
 
const CanvasPage = () => {   
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[50px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mx-auto py-[5px] w-full">
            <Img
              className="h-[30px] w-[260px]"
              src="images/img__black_900_30x260.svg"
              alt="fourhundredsixt"
            />
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
              <Img
                className="h-[30px] md:h-auto object-cover w-[30px]"
                src="images/img_image689.png"
                alt="image689"
              />
              <Img
                className="h-[30px] md:h-auto object-cover w-[30px]"
                src="images/img_image690.png"
                alt="image690"
              />
              <Button
                className="cursor-pointer font-medium text-base text-center tracking-[-0.30px] w-[140px]"
                shape="square"
                color="blue_gray_100"
                size="sm"
                variant="fill"
              >
                임시저장
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[140px] text-base text-center tracking-[-0.30px]"
                shape="square"
                color="blue_gray_100"
                size="sm"
                variant="fill"
              >
                완성하기
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
          <Sidebar className="!sticky !w-[400px] bg-gray-600_7f flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <CanvasColumnfourhundredseve className="flex flex-col gap-2.5 items-center justify-start mb-[940px] mt-2.5 mx-auto w-[380px] sm:w-full" />
            <div className="flex flex-col h-full items-start justify-center mb-2.5 mt-[99px] mx-auto px-5 py-2.5 w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-[92%]">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <Img
                      className="h-[175px] w-[130px]"
                      src="images/img__deep_orange_100.svg"
                      alt="fourhundredtwen_One"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[50px]"
                      size="txtInterMedium16Gray900"
                    >
                      1페이지
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <Img
                      className="h-[175px] w-[130px]"
                      src="images/img__deep_orange_100.svg"
                      alt="fourhundredtwen_Two"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[52px]"
                      size="txtInterMedium16Gray900"
                    >
                      2페이지
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <Img
                      className="h-[175px] w-[130px]"
                      src="images/img__deep_orange_100.svg"
                      alt="fourhundredtwen_Three"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[52px]"
                      size="txtInterMedium16Gray900"
                    >
                      3페이지
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <Img
                      className="h-[175px] w-[130px]"
                      src="images/img__deep_orange_100.svg"
                      alt="fourhundredtwen_Four"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[53px]"
                      size="txtInterMedium16Gray900"
                    >
                      4페이지
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <Img
                      className="h-[175px] w-[130px]"
                      src="images/img__deep_orange_100.svg"
                      alt="fourhundredtwen_Five"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[52px]"
                      size="txtInterMedium16Gray900"
                    >
                      5페이지
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <Img
                      className="h-[175px] w-[130px]"
                      src="images/img__deep_orange_100.svg"
                      alt="fourhundredtwen_Six"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[52px]"
                      size="txtInterMedium16Gray900"
                    >
                      6페이지
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <Img
                      className="h-[175px] w-[130px]"
                      src="images/img__deep_orange_100.svg"
                      alt="fourhundredtwen_Seven"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[52px]"
                      size="txtInterMedium16Gray900"
                    >
                      7페이지
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <Img
                      className="h-[175px] w-[130px]"
                      src="images/img__deep_orange_100.svg"
                      alt="fourhundredtwen_Eight"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[52px]"
                      size="txtInterMedium16Gray900"
                    >
                      8페이지
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </Sidebar>
          <Img
            className="h-[846px] max-h-[846px] md:ml-[0] ml-[299px] sm:w-[] md:w-[]"
            src="images/img_1_white_a700.svg"
            alt="onenine"
          />
          <CanvasRowthumbsup className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between ml-3.5 md:ml-[0] md:px-5 py-[50px] w-full" />
        </div>
      </div>
    </>
  );
};

export default CanvasPage;
