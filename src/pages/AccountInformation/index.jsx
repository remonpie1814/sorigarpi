import React from "react";

import { Img, List, Text } from "components";
import AccountInformationColumncommenteleven from "components/AccountInformationColumncommenteleven";
import AccountInformationColumnconfusedone from "components/AccountInformationColumnconfusedone";
import AccountInformationColumnonehundredfiftysix from "components/AccountInformationColumnonehundredfiftysix";
import AccountInformationColumnreloadone from "components/AccountInformationColumnreloadone";
import SearchResultHeader from "components/SearchResultHeader";
import Navbar from "components/Navbar";

const AccountInformationPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <SearchResultHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <div className="flex flex-col items-center justify-start max-w-[1182px] mx-auto md:px-5 w-full">
          <Navbar className="flex flex-col items-center justify-start w-full" />
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1182px] pt-[30px] w-full">
            <div className="bg-white-A700 flex flex-col gap-2 items-center justify-center max-w-[1182px] sm:px-5 px-[30px] py-[15px] w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-auto"
                size="txtInterMedium28Black900"
              >
                내 계정
              </Text>
              <Text
                className="text-base text-black-900 text-center tracking-[-0.30px] w-auto"
                size="txtInterMedium16Black900"
              >
                test@test.com
              </Text>
            </div>
            <div className="bg-orange-50 flex md:flex-col flex-row md:gap-5 h-[100px] md:h-auto items-center justify-center max-w-[1179px] px-5 w-full">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-3 w-[53%] md:w-full"
                orientation="horizontal"
              >
                <div className="h-12 md:px-10 sm:px-5 px-[50px] py-5 relative w-[200px]">
                  <div className="absolute h-[45px] inset-[0] m-auto outline outline-blue_gray-900 w-full"></div>
                  <div className="absolute flex flex-col gap-3.5 h-full inset-[0] items-center justify-center m-auto">
                    <Text
                      className="text-black-900 text-center text-sm tracking-[-0.27px] w-auto"
                      size="txtInterMedium14Black900"
                    >
                      가입일자
                    </Text>
                    <Text
                      className="text-black-900 text-center text-sm tracking-[-0.27px] w-auto"
                      size="txtInterBold14"
                    >
                      2023. 01. 02
                    </Text>
                  </div>
                </div>
                <div className="h-12 md:px-10 sm:px-5 px-[50px] py-5 relative w-[200px]">
                  <div className="absolute h-[45px] inset-[0] m-auto outline outline-blue_gray-900 w-full"></div>
                  <div className="absolute flex flex-col gap-3.5 h-full inset-[0] items-center justify-center m-auto">
                    <Text
                      className="text-black-900 text-center text-sm tracking-[-0.27px] w-auto"
                      size="txtInterMedium14Black900"
                    >
                      만든 동화 수
                    </Text>
                    <Text
                      className="text-black-900 text-center text-sm tracking-[-0.27px] w-auto"
                      size="txtInterBold14"
                    >
                      4개
                    </Text>
                  </div>
                </div>
                <div className="h-[47px] md:px-10 sm:px-5 px-[50px] py-5 relative w-[200px]">
                  <div className="absolute h-[45px] inset-[0] m-auto outline outline-blue_gray-900 w-full"></div>
                  <div className="absolute flex flex-col gap-[13px] h-full inset-[0] items-center justify-center m-auto">
                    <Text
                      className="text-black-900 text-center text-sm tracking-[-0.27px] w-auto"
                      size="txtInterMedium14Black900"
                    >
                      녹음한 동화 수
                    </Text>
                    <Text
                      className="text-black-900 text-center text-sm tracking-[-0.27px] w-auto"
                      size="txtInterBold14"
                    >
                      3개
                    </Text>
                  </div>
                </div>
              </List>
              <div className="flex flex-col gap-2.5 h-[47px] md:h-auto items-center justify-center md:px-10 sm:px-5 px-[50px] py-5 w-[200px]">
                <Text
                  className="text-black-900 text-center text-sm tracking-[-0.27px] w-auto"
                  size="txtInterMedium14Black900"
                >
                  받은 좋아요 수
                </Text>
                <Text
                  className="text-black-900 text-center text-sm tracking-[-0.27px] w-auto"
                  size="txtInterBold14"
                >
                  55개
                </Text>
              </div>
              <Img
                className="h-[50px] w-[49px]"
                src="images/img_.svg"
                alt="OneHundredFiftyTwo"
              />
            </div>
            <List
              className="flex flex-col gap-[30px] items-start w-auto"
              orientation="vertical"
            >
              <AccountInformationColumncommenteleven className="border-2 border-blue_gray-900 border-solid flex flex-col items-center justify-start my-0 p-2 rounded-[16px] w-full" />
              <AccountInformationColumnreloadone className="border-2 border-blue_gray-900 border-solid flex flex-col items-center justify-start my-0 p-2 rounded-[16px] w-full" />
              <AccountInformationColumnconfusedone className="border-2 border-blue_gray-900 border-solid flex flex-col items-center justify-start my-0 p-2 rounded-[16px] w-full" />
              <AccountInformationColumnonehundredfiftysix className="border-2 border-blue_gray-900 border-solid flex flex-col items-center justify-start my-0 p-2 rounded-[16px] w-full" />
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountInformationPage;
