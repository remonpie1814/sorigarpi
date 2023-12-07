import React from "react";

import { Img, Text } from "components";
import Header1 from "components/Header1";
import Listtwohundredtwent from "components/Listtwohundredtwent";
import TaleDetailColumnlanguage from "components/TaleDetailColumnlanguage";

const Page9 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="bg-white-A700 flex flex-col items-center justify-start p-[25px] sm:px-5 w-full" />
        <TaleDetailColumnlanguage className="flex flex-col items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start max-w-[1920px] w-full">
          <div className="bg-blue_gray-100 flex flex-col gap-[46px] items-center justify-end p-9 sm:px-5 w-full">
            <div className="h-[108px] md:h-[165px] max-w-[1215px] mt-[57px] mx-auto md:px-5 relative w-full">
              <Text
                className="mt-[7px] mx-auto text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[-0.46px]"
                size="txtInterMedium24"
              >
                메인 배너
              </Text>
              <div className="absolute inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[108px] ml-[388px] my-auto"
                  src="images/img__black_900_108x90.svg"
                  alt="twohundredeight"
                />
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
            <div className="flex flex-row gap-4 items-start justify-start md:px-5 w-auto">
              <div className="h-4 w-4"></div>
              <div className="h-4 w-4"></div>
              <div className="h-4 w-4"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1180px] mx-auto md:px-5 py-5 w-full">
          <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[247px] w-full">
            <div className="flex flex-col items-center justify-start p-5 w-full">
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
                    세 번 누르면 죽는 버튼
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:gap-10 items-start justify-between w-full">
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
                alt="downthirtyone"
              />
            </div>
          </div>
          <Listtwohundredtwent className="sm:flex-col flex-row md:gap-10 gap-[60px] grid md:grid-cols-1 grid-cols-2 justify-start w-full" />
          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
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
                alt="downthirtytwo"
              />
            </div>
          </div>
          <Listtwohundredtwent className="sm:flex-col flex-row md:gap-10 gap-[60px] grid md:grid-cols-1 grid-cols-2 justify-start w-full" />
        </div>
        <footer className="bg-blue_gray-50_02 flex items-center justify-center md:px-5 w-full">
          <div className="bg-gray-100_01 flex flex-col items-center justify-center pb-[30px] sm:px-5 px-[30px] w-full">
            <div className="flex flex-col gap-[25px] items-center justify-start max-w-[1180px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-start justify-center max-w-[1180px] md:px-10 sm:px-5 px-[60px] py-[25px] w-full">
                <div className="flex flex-col items-start justify-start pr-1.5 py-1.5">
                  <Text
                    className="text-base text-black-900 tracking-[-0.30px]"
                    size="txtInterMedium16Black900_1"
                  >
                    고객센터
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start p-[5px]">
                  <Text
                    className="md:ml-[0] ml-[5px] text-base text-black-900 text-center tracking-[-0.30px]"
                    size="txtInterMedium16Black900_1"
                  >
                    공지사항
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-center md:px-10 sm:px-5 px-[60px] py-2.5 w-full">
                <Text
                  className="text-base text-blue_gray-900 tracking-[-0.30px] w-auto"
                  size="txtInterMedium16Bluegray900"
                >
                  사업자 정보
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 tracking-[-0.30px] w-auto"
                    size="txtInterMedium16Bluegray900"
                  >
                    이용약관
                  </Text>
                  <Text
                    className="text-base text-blue_gray-400_01 tracking-[-0.30px] w-auto"
                    size="txtInterMedium16Bluegray40001"
                  >
                    개인정보 처리방침
                  </Text>
                </div>
              </div>
              <Img
                className="h-[92px] w-full"
                src="images/img__blue_gray_100.svg"
                alt="twohundredthirt_Two"
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Page9;
