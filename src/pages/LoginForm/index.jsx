import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Text,
  Footer,
  Navbar,
  MainHeader,
} from "components";

const LoginFormPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto shadow-bs w-auto sm:w-full md:w-full">
        <MainHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <Navbar className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
        <div className="flex flex-col gap-5 h-[720px] md:h-auto items-center justify-start md:px-5 py-[120px] w-[720px] md:w-full">
          <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
            <Img
              className="h-[51px] md:h-auto object-cover w-[170px]"
              src="images/img__51x170.png"
              alt="ThreeHundredSixtyFive"
            />
            <Img
              className="h-[60px] w-[58px]"
              src="images/img__black_900.svg"
              alt="ThreeHundredSixtySix"
            />
          </div>
          <div className="flex flex-col gap-5 items-center justify-start w-[67%] md:w-full">
            <div className="bg-amber-100 flex flex-col gap-5 items-center justify-center px-10 sm:px-5 py-[30px] rounded-[20px] w-[480px] sm:w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                size="txtInterRegular28"
              >
                로그인
              </Text>
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <Input
                  name="input"
                  placeholder="이메일"
                  className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
                  wrapClassName="border border-gray-300 border-solid w-full"
                  color="white_A700"
                  variant="fill"
                ></Input>
                <Input
                  name="input_One"
                  placeholder="비밀번호"
                  className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
                  wrapClassName="border border-gray-300 border-solid w-full"
                  color="white_A700"
                  variant="fill"
                ></Input>
                <div className="flex relative w-[230px]">
                  <div className="h-5 my-auto w-[61%] sm:w-full">
                    <CheckBox
                      className="font-medium my-auto text-[15px] text-left tracking-[-0.17px]"
                      inputClassName="absolute h-5 mr-[5px] outline outline-[2px] outline-gray-300 rounded-sm w-5"
                      name="ThreeHundredSixtyEight"
                      id="ThreeHundredSixtyEight"
                      label="아이디 저장"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></CheckBox>
                    <CheckBox
                      className="font-medium my-auto text-[15px] text-left tracking-[-0.17px]"
                      inputClassName="absolute h-5 mr-[5px] outline outline-[2px] outline-gray-300 rounded-sm w-5"
                      name="ThreeHundredSixtyNine"
                      id="ThreeHundredSixtyNine"
                      label="아이디 저장"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></CheckBox>
                  </div>
                  <CheckBox
                    className="font-medium ml-[-20px] my-auto text-[15px] text-left tracking-[-0.17px] z-[1]"
                    inputClassName="h-5 mr-[5px] outline outline-[2px] outline-gray-300 rounded-sm w-5 z-[1]"
                    name="ThreeHundredSeventy"
                    id="ThreeHundredSeventy"
                    label="자동로그인"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></CheckBox>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer min-w-[480px] sm:min-w-full text-[15px] text-center tracking-[-0.17px]"
              shape="round"
              color="yellow_200"
              size="xl"
              variant="fill"
            >
              로그인
            </Button>
          </div>
          <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[262px] w-full">
            <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
              <Text
                className="text-[15px] text-center text-gray-900 tracking-[-0.17px] w-auto"
                size="txtInterMedium15"
              >
                비밀번호 찾기
              </Text>
              <Text
                className="text-[15px] text-center text-gray-900 tracking-[-0.17px] w-auto"
                size="txtInterMedium15"
              >
                |
              </Text>
              <Text
                className="text-[15px] text-center text-gray-900 tracking-[-0.17px] w-auto"
                size="txtInterMedium15"
              >
                회원가입
              </Text>
            </div>
          </div>
        </div>
        <Footer className="bg-blue_gray-50_02 flex gap-2.5 items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default LoginFormPage;
