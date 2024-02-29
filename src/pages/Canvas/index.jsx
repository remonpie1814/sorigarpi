import React, { useEffect } from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const CanvasPage = () => {
  document.body.style = `overflow: hidden`;
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start h-screen">
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[50px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mx-auto py-[5px] w-full">
            <Img
              className="h-[30px] w-[260px]"
              src="images/img__black_900_30x260.svg"
              alt="FourHundredThirtySix"
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
                size="md"
                variant="fill"
              >
                임시저장
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[140px] text-base text-center tracking-[-0.30px]"
                shape="square"
                color="blue_gray_100"
                size="md"
                variant="fill"
              >
                완성하기
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
          <Sidebar className="!sticky !w-[400px] bg-gray-600_7f flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <CanvasPageButtons className="flex flex-col gap-2.5 items-center justify-start mt-2.5 mx-auto w-[380px] sm:w-full" />
            <div className="flex flex-col h-full items-start justify-center mx-auto my-[9px] px-5 py-2.5 w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-[92%]">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <Img
                      className="h-[175px] w-[130px]"
                      src="images/img__deep_orange_100.svg"
                      alt="FourHundredFortyOne"
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
                      alt="FourHundredFortyTwo"
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
                      alt="FourHundredFortyThree"
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
                      alt="FourHundredFortyFour"
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
                      alt="FourHundredFortyFive"
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
                      alt="FourHundredFortySix"
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
                      alt="FourHundredFortySeven"
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
                      alt="FourHundredFortyEight"
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
            alt="One_Nine"
          />
          <CanvasRowthumbsup className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between ml-3.5 md:ml-[0] md:px-5 py-[50px] w-full" />
        </div>
      </div>
    </>
  );
};

const CanvasPageButtons = (props) => {
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
            페이지 삭제
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
            페이지 추가
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
              1
            </Text>
            <Text
              className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray900_1"
            >
              /
            </Text>
            <Text
              className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray900_1"
            >
              8
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

const CanvasRowthumbsup = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[900px] md:h-auto items-center justify-start px-5 w-[540px] sm:w-full">
          <div className="bg-black-900_99 flex flex-col items-center justify-start rounded-[12px] w-auto sm:w-full">
            <div className="flex flex-col items-center justify-start w-[87%] md:w-full">
              <div className="flex flex-col gap-[43px] items-center justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Img
                    className="h-[78px] md:h-auto object-cover w-[77px]"
                    src="images/img_image683.png"
                    alt="image683"
                  />
                  <Img
                    className="h-[85px] md:h-auto object-cover"
                    src="images/img_image682.png"
                    alt="image682"
                  />
                  <Img
                    className="h-[65px] md:h-auto object-cover"
                    src="images/img_image686.png"
                    alt="image686"
                  />
                  <Img
                    className="h-[66px] md:h-auto object-cover"
                    src="images/img_image685.png"
                    alt="image685"
                  />
                </div>
                <div className="flex flex-row gap-[66px] items-start justify-start w-auto">
                  <Img
                    className="h-9 md:h-auto object-cover w-9"
                    src="images/img_image689_30x30.png"
                    alt="image691"
                  />
                  <Img
                    className="h-9 md:h-auto object-cover w-9"
                    src="images/img_image690_30x30.png"
                    alt="image691_One"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100_01 flex flex-col gap-2.5 items-center justify-start px-5 py-[5px] rotate-[-90deg] w-[55px]">
          <Img
            className="h-[38px] w-[41px]"
            src="images/img_thumbsup.svg"
            alt="thumbsup"
          />
          <Img
            className="h-[76px] w-[39px]"
            src="images/img_offer.svg"
            alt="offer"
          />
          <Img
            className="h-[43px] w-[29px]"
            src="images/img_television.svg"
            alt="television"
          />
          <Img
            className="h-[33px] w-[45px]"
            src="images/img_user.svg"
            alt="user"
          />
          <Img
            className="h-[54px] md:h-auto object-cover w-[29px]"
            src="images/img_image754.png"
            alt="image754"
          />
          <Img
            className="h-[54px] md:h-auto object-cover w-[29px]"
            src="images/img_icons8241.png"
            alt="icons8241"
          />
          <Img
            className="h-[54px] md:h-auto object-cover w-[29px]"
            src="images/img_image764.png"
            alt="image764"
          />
          <Img
            className="h-[55px] md:h-auto object-cover w-[30px]"
            src="images/img_image769.png"
            alt="image769"
          />
        </div>
      </div>
    </>
  );
};

export default CanvasPage;
