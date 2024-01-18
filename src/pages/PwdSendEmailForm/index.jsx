import React from "react";

import { Img, Input, Layout, Text } from "components";

const PwdSendEmailFormPage = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col gap-[50px] md:h-auto items-center justify-start md:px-5 py-[121px] w-[720px] md:w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 tracking-[-0.53px] w-auto"
            size="txtInterMedium28Gray900"
          >
            비밀번호찾기
          </Text>
          <div className="flex flex-col gap-[50px] items-center justify-start w-[56%] md:w-full">
            <Input
              name="input"
              placeholder="이메일"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-full"
            ></Input>
            <div className="bg-amber-A100 flex flex-col items-center justify-end p-2.5 rounded-[10px] w-full">
              <div className="flex flex-col items-start justify-end p-[3px]">
                <Text
                  className="md:ml-[0] ml-[91px] text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.42px]"
                  size="txtInterMedium22Black900"
                >
                  인증 이메일 발송
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PwdSendEmailFormPage;
