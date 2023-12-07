import React from "react";

import { Button, CheckBox, Img, Input, Text } from "components";
import Navbar from "components/Navbar";

const RegisterFormPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto shadow-bs w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1180px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-center px-4 w-auto">
              <Img
                className="h-[51px] md:h-auto object-cover w-[170px]"
                src="images/img__51x170.png"
                alt="threehundredsix"
              />
            </div>
            <div className="flex flex-row gap-2.5 items-start justify-start py-2.5 w-auto">
              <Img
                className="h-12 md:h-auto object-cover w-12"
                src="images/img_bell111.png"
                alt="bell111"
              />
              <Img
                className="h-12 md:h-auto object-cover w-12"
                src="images/img_search111.png"
                alt="search111"
              />
              <Img
                className="h-12 md:h-auto object-cover w-12"
                src="images/img_menu11.png"
                alt="menueleven"
              />
            </div>
          </div>
        </div>
        <Navbar className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
        <div className="flex flex-col gap-[50px] h-[899px] md:h-auto items-center justify-between max-w-[1180px] mx-auto md:px-5 py-[120px] w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 tracking-[-0.53px] w-auto"
            size="txtInterMedium28Gray900"
          >
            회원가입
          </Text>
          <div className="flex flex-col items-center justify-start w-auto sm:w-full">
            <Input
              name="input"
              placeholder="이메일"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-full"
            ></Input>
            <div className="flex flex-col h-[21px] md:h-auto items-center justify-start px-5 w-full">
              <Text
                className="text-deep_orange-600 text-sm tracking-[-0.27px] w-full"
                size="txtInterMedium14Deeporange600"
              >
                이메일 형식에 맞지 않습니다
              </Text>
            </div>
            <Input
              name="inputone"
              placeholder="비밀번호"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-full"
            ></Input>
            <div className="flex flex-col h-[21px] md:h-auto items-center justify-start px-5 w-full">
              <Text
                className="text-deep_orange-600 text-sm tracking-[-0.27px] w-full"
                size="txtInterMedium14Deeporange600"
              >
                4자 이상으로 입력해주세요
              </Text>
            </div>
            <Input
              name="inputtwo"
              placeholder="비밀번호 확인"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-full"
            ></Input>
            <div className="flex flex-col h-[21px] md:h-auto items-center justify-start px-5 w-full">
              <Text
                className="text-deep_orange-600 text-sm tracking-[-0.27px] w-full"
                size="txtInterMedium14Deeporange600"
              >
                메시지
              </Text>
            </div>
            <Input
              name="inputthree"
              placeholder="닉네임(12자)"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-full"
            ></Input>
            <div className="flex flex-col h-[21px] md:h-auto items-center justify-start px-5 w-full">
              <Text
                className="text-green-A700 text-sm tracking-[-0.27px] w-full"
                size="txtInterMedium14GreenA700"
              >
                사용가능한 닉네임입니다
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:px-10 px-40 sm:px-5 w-full">
            <div className="bg-gray-100_01 flex flex-col items-center justify-start px-5 rounded-[10px] w-[47%] md:w-full">
              <CheckBox
                className="font-medium text-base text-left tracking-[-0.30px]"
                inputClassName="h-5 mr-[5px] outline outline-[2px] outline-gray-300 rounded-sm w-5"
                name="threehundredsix_Nine"
                id="threehundredsix_Nine"
                label="개인정보 이용동의"
                color="white_A700"
                size="sm"
                variant="fill"
              ></CheckBox>
            </div>
          </div>
          <Button
            className="cursor-pointer font-medium min-w-[400px] sm:min-w-full rounded-[10px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px]"
            color="amber_A100"
            size="lg"
            variant="fill"
          >
            회원가입
          </Button>
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
                alt="threehundredsev_Five"
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default RegisterFormPage;
