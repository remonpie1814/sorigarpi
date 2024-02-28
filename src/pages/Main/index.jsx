//** 메인페이지 */
// 레이아웃과 포함된 컴포넌트 수정

import React from "react";

import { Img, Layout, Text, SearchMobile } from "components";
import { MainTaleColumn } from "components";

const MainPage = () => {
  return (
    <>
      <Layout>
        <div className="absolute top-[158px] flex flex-col items-center justify-start max-w-[1920px] w-full">
          <div className="flex flex-col items-center justify-center w-full bg-blue_gray-100 p-9 sm:px-5">
            <div className="relative w-full h-full max-w-[1215px] mx-auto md:px-5 md:h-[165px]">
              <div className="flex flex-row items-center justify-center w-full h-full">
                <Img
                  className="h-[108px] my-auto"
                  src="images/img__black_900_108x90.svg"
                  alt="TwoHundredThirtyNine"
                />
                <Text
                  className="text-2xl text-black-900 text-center md:text-[22px] sm:text-xl tracking-[-0.46px]"
                  size="txtInterMedium24"
                >
                  메인 배너
                </Text>
              </div>

              <div className="absolute inset-[0] justify-center m-auto w-full">
                <div className="absolute bottom-[31%] flex flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto pl-[5px] pt-[5px] w-full">
                  <Text
                    className="ml-[30px] rotate-[180deg] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.46px]"
                    size="txtInterMedium24WhiteA700"
                  >
                    <>&gt;</>
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.46px]"
                    size="txtInterMedium24WhiteA700"
                  >
                    <>&gt;</>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1180px] mx-auto md:px-5 py-5 w-full mb-[100px]">
          <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[247px] w-full">
            <div className="flex flex-col items-center justify-start w-full p-5">
              <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[3px] outline-amber-400 md:px-10 sm:px-5 px-[42px] py-6 rounded-[15px] w-[342px]">
                <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                  <Img
                    className="h-12 md:h-auto object-cover w-[46px]"
                    src="images/img_image528.png"
                    alt="image528"
                  />
                  <Text
                    className="text-[22px] text-amber-500 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
                    size="txtInterExtraBold22"
                  >
                    나만의 동화 만들기
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between w-full md:gap-10">
            <div className="md:h-[30px] h-[33px] relative w-[13%]">
              <div className="bg-yellow-200 h-[30px] m-auto rounded-[15px] w-full"></div>
              <Text
                className="absolute h-max inset-[0] justify-center m-auto text-base text-black-900 text-center tracking-[-0.30px] w-max"
                size="txtInterMedium16Black900_1"
              >
                인기동화
              </Text>
            </div>
            <div className="flex flex-row items-center justify-end w-auto">
              <Text
                className="text-blue_gray-400 text-center text-sm tracking-[-0.27px] w-auto"
                size="txtInterMedium14Bluegray400"
              >
                더보기{" "}
              </Text>
              <Img
                className="h-[30px] md:h-auto object-cover w-[30px]"
                src="images/img_down31.png"
                alt="downThirtyOne"
              />
            </div>
          </div>
          <MainTaleColumn
            className="sm:flex-col flex-row md:gap-10 gap-[60px] grid md:grid-cols-1 grid-cols-2 justify-start w-full"
            images={[
              "images/img_image917.png",
              "images/img_image917.png",
              "images/img_image917.png",
              "images/img_image917.png",
              "images/img_image917.png",
              "images/img_image917.png",
            ]}
          />
          <div className="flex flex-row items-center justify-between w-full md:gap-10">
            <div className="md:h-[30px] h-[33px] relative w-[13%]">
              <div className="bg-yellow-200 h-[30px] m-auto rounded-[15px] w-full"></div>
              <Text
                className="absolute h-max inset-[0] justify-center m-auto text-base text-black-900 text-center tracking-[-0.30px] w-max"
                size="txtInterMedium16Black900_1"
              >
                신작동화
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-auto">
              <Text
                className="text-blue_gray-400 text-center text-sm tracking-[-0.27px] w-auto"
                size="txtInterMedium14Bluegray400"
              >
                더보기{" "}
              </Text>
              <Img
                className="h-[30px] md:h-auto object-cover w-[30px]"
                src="images/img_down31.png"
                alt="downThirtyTwo"
              />
            </div>
          </div>
          <MainTaleColumn
            className="sm:flex-col flex-row md:gap-10 gap-[60px] grid md:grid-cols-1 grid-cols-2 justify-start w-full"
            images={[
              "images/img_image917.png",
              "images/img_image917.png",
              "images/img_image917.png",
              "images/img_image917.png",
              "images/img_image917.png",
              "images/img_image917.png",
            ]}
          />
        </div>
      </Layout>
    </>
  );
};

export default MainPage;
