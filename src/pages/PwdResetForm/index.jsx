import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, MainHeader, Navbar, Text } from "components";
import { Footer } from "components";

const PwdResetFormPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto shadow-bs w-auto sm:w-full md:w-full">
        <MainHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <Navbar className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
        <div className="flex flex-col gap-[50px] md:h-auto items-center justify-start md:px-5 py-[120px] w-[720px] md:w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 tracking-[-0.53px] w-auto"
            size="txtInterMedium28Gray900"
          >
            비밀번호 재설정
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <Input
              name="input"
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
              name="input_One"
              placeholder="비밀번호 확인"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-[56%]"
            ></Input>
          </div>
          <Button
            className="common-pointer cursor-pointer font-medium min-w-[400px] sm:min-w-full rounded-[10px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px]"
            onClick={() => navigate("/loginform")}
            color="amber_A100"
            size="xl"
            variant="fill"
          >
            비밀번호 재설정
          </Button>
        </div>
        <Footer className="bg-blue_gray-50_02 flex gap-2.5 items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default PwdResetFormPage;
