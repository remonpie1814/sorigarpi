import React from "react";

import { Img, Input, Text } from "components";
import Header from "components/Header";
import Navbar from "components/Navbar";

const PwdModifyFormPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto shadow-bs w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <Navbar className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
        <div className="flex flex-col gap-[50px] md:h-auto items-center justify-start md:px-5 py-[120px] w-[720px] md:w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 tracking-[-0.53px] w-auto"
            size="txtInterMedium28Gray900"
          >
            비밀번호 수정
          </Text>
          <div className="flex flex-col gap-[33px] items-center justify-start w-full">
            <Input
              name="input"
              placeholder="현재 비밀번호"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-[56%]"
            ></Input>
            <Input
              name="inputone"
              placeholder="새 비밀번호"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-[56%]"
            ></Input>
            <div className="flex flex-col h-[33px] md:h-auto items-center justify-start px-5 w-[400px] sm:w-full">
              <Text
                className="text-deep_orange-600 text-sm tracking-[-0.27px] w-full"
                size="txtInterMedium14Deeporange600"
              >
                비밀번호는 8자 이상으로 입력해주세요
              </Text>
            </div>
            <Input
              name="inputtwo"
              placeholder="비밀번호 확인"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-[56%]"
            ></Input>
            <div className="flex flex-col h-[33px] md:h-auto items-center justify-start px-5 w-[400px] sm:w-full">
              <Text
                className="text-deep_orange-600 text-sm tracking-[-0.27px] w-full"
                size="txtInterMedium14Deeporange600"
              >
                비밀번호가 불일치합니다
              </Text>
            </div>
          </div>
          <div className="h-[57px] relative w-1/2">
            <div className="absolute bg-amber-A100 h-[57px] inset-[0] justify-center m-auto rounded-[10px] w-[64%]"></div>
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto p-[3px] w-full">
              <Text
                className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.42px]"
                size="txtInterMedium22Black900"
              >
                비밀번호 재설정
              </Text>
            </div>
          </div>
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
                alt="twohundredforty_Five"
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PwdModifyFormPage;
