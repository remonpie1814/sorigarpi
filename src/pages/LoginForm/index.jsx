import React from "react";

import { Button, CheckBox, Img, Input, Text, Layout } from "components";

const LoginFormPage = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col gap-5 h-[720px] md:h-auto items-center justify-start md:px-5 py-[120px] w-[720px] md:w-full">
          <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
            <Img
              className="h-[51px] md:h-auto object-cover w-[170px]"
              src="images/img__51x170.png"
              alt="로고"
            />
            <Img
              className="h-[60px] w-[58px]"
              src="images/img__black_900.svg"
              alt="콩림이"
            />
          </div>
          <form className="flex flex-col gap-5 items-center justify-start w-[67%] md:w-full">
            <div className="bg-amber-100 flex flex-col gap-5 items-center justify-center px-10 sm:px-5 py-[30px] rounded-[20px] w-[480px] sm:w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                size="txtInterRegular28"
              >
                로그인
              </Text>
              <div className="flex flex-col items-center justify-start w-full gap-5">
                <Input
                  placeholder="이메일"
                  className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
                  wrapClassName="border border-gray-300 border-solid w-full"
                  color="white_A700"
                  variant="fill"
                ></Input>
                <Input
                  type="password"
                  placeholder="비밀번호"
                  className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
                  wrapClassName="border border-gray-300 border-solid w-full"
                  color="white_A700"
                  variant="fill"
                ></Input>
                <div className="flex relative w-[230px]">
                  <div className="w-1/2 h-5 my-auto sm:w-full">
                    <CheckBox
                      className="flex justify-start items-center font-medium my-auto 
                                text-[15px] text-left tracking-[-0.17px]"
                      inputClassName="h-5 mr-2 outline outline-[2px] outline-gray-300 rounded-sm w-5"
                      name="ThreeHundredSixtyNine"
                      id="ThreeHundredSixtyNine"
                      label="아이디 저장"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></CheckBox>
                  </div>
                  <div className="w-1/2 h-5 my-auto sm:w-full">
                    <CheckBox
                      className="flex justify-start items-center font-medium my-auto
                                text-[15px] text-left tracking-[-0.17px]"
                      inputClassName="h-5 mr-2 outline outline-[2px] outline-gray-300 rounded-sm w-5"
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
          </form>
          <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[262px] w-full">
            <div
              className="flex flex-row gap-2.5 items-center justify-center w-full
                        text-[15px] text-gray-900 tracking-[-0.17px]"
            >
              <Button className="min-w-[100px] text-right">
                <a href="/pwdsendemailform">비밀번호 찾기</a>
              </Button>
              <Text>|</Text>
              <Button className="min-w-[100px] text-left">
                <a href="/RegisterForm">회원가입</a>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LoginFormPage;
