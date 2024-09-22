import React from "react";

import { CheckBox, Img, Input, List, Text } from "components";
import { Layout } from "components";

const DeleteId = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1180px] pb-[60px] pt-[30px] w-full">
            <Text
              className="bg-white-A700 justify-center pb-[15px] sm:pr-5 pr-[35px] pt-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px] w-full"
              size="txtInterMedium28"
            >
              탈퇴하기
            </Text>
            <div className="flex flex-row justify-center w-full ">
              <Img
                className="w-[80px] justify-center"
                src="/images/alarm.png"
              />
            </div>
            <div className="flex flex-col ">
              <div>
                탈퇴하시면 작성한 동화는 모두 삭제되고 복구되지 않습니다. 탈퇴에
                대한 안내 내용들 . . .
              </div>
              <CheckBox label="안내사항을 모두 확인하였으며, 이에 동의합니다."></CheckBox>
              <div>비밀번호 입력</div>
              <Input
                className="w-1/2 h-[15px]"
                placeholder="현재 비밀번호를 입력하세요."
              ></Input>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DeleteId;
