import React from "react";

import { Button, CheckBox, Img, Input, Layout, Text } from "components";

const RegisterFormPage = () => {
  return (
    <>
      <Layout>
        <div
          className="flex flex-col gap-[50px] items-center justify-between
        h-[899px] md:h-auto max-w-[1180px] w-[540px] mx-auto md:px-5 py-[120px]"
        >
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 tracking-[-0.53px] w-auto"
            size="txtInterMedium28Gray900"
          >
            회원가입
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <Input
              name="input"
              placeholder="이메일"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-full"
            ></Input>
            <ErrMSG color={"red"}>이메일 형식에 맞지 않습니다</ErrMSG>
            <Input
              name="input_One"
              placeholder="비밀번호"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-full"
            ></Input>
            <ErrMSG color={"red"}>4자 이상으로 입력해주세요</ErrMSG>
            <Input
              name="input_Two"
              placeholder="비밀번호 확인"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-full"
            ></Input>
            <ErrMSG color={"red"}>에러메시지</ErrMSG>
            <Input
              name="input_Three"
              placeholder="닉네임(12자)"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-full"
            ></Input>
            <ErrMSG color="green">사용가능한 닉네임입니다</ErrMSG>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-gray-100_01 flex flex-col items-center justify-center px-5 rounded-[10px] w-full h-[30px]">
              <CheckBox
                className="flex flex-row justify-center items-center font-medium text-base tracking-[-0.30px] w-full text-center"
                inputClassName="w-5 h-5 mr-2 outline outline-[2px] outline-gray-300 rounded-sm"
                name="ThreeHundredEightyNine"
                id="ThreeHundredEightyNine"
                label="개인정보 이용동의"
                color="white_A700"
                variant="fill"
              ></CheckBox>
            </div>
          </div>
          <Button
            className="cursor-pointer font-medium w-full rounded-[10px]
                      text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px]"
            color="amber_A100"
            size="xl"
            variant="fill"
          >
            회원가입
          </Button>
        </div>
      </Layout>
    </>
  );
};

const ErrMSG = ({ children, color }) => {
  let colorVariant = {
    green: "text-green-A700",
    red: "text-deep_orange-600",
  };
  return (
    <div className="flex flex-col h-[21px] md:h-auto items-center justify-start px-5 w-full">
      <Text
        className={`${colorVariant?.[color]} text-sm tracking-[-0.27px] w-full`}
        size="txtInterMedium14GreenA700"
      >
        {children}
      </Text>
    </div>
  );
};

export default RegisterFormPage;
