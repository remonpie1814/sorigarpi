import React from "react";

import { Img, List, Text } from "components";
import { Layout } from "components";

const AccountInformationPage = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-start max-w-[1182px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1182px] pt-[30px] w-full">
            <div className="grid grid-cols-3 grid-flow-row">
              <div></div>
              <div
                className="bg-white-A700 flex flex-col gap-2 
            items-center justify-center max-w-[1182px] sm:px-5 px-[30px] py-[15px] w-full"
              >
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
              <div className="flex items-center justify-center">
                <Img
                  className="h-[50px] w-[49px]"
                  src="images/img_.svg"
                  alt="OneHundredFiftyTwo"
                />
              </div>
            </div>
            <div
              className="bg-orange-50 grid grid-flow-row grid-cols-3 sm:grid-cols-1 h-[100px] md:h-auto 
            items-center justify-center max-w-[1179px] px-5 w-full"
            >
              {[
                { text: "가입일자", value: "2023. 01. 02" },
                { text: "녹음한 동화 수", value: "3개" },
                { text: "받은 좋아요 수", value: "55개" },
              ].map((a, i) => {
                return (
                  <div
                    className="flex flex-col gap-3.5 h-full items-center justify-center m-auto
                 w-full md:px-10 sm:px-5 py-5"
                  >
                    <Text
                      className="text-black-900 text-center text-sm tracking-[-0.27px] w-auto"
                      size="txtInterMedium14Black900"
                    >
                      {a.text}
                    </Text>
                    <Text
                      className="text-black-900 text-center text-sm tracking-[-0.27px] w-auto"
                      size="txtInterBold14"
                    >
                      {a.value}
                    </Text>
                  </div>
                );
              })}
            </div>
            <List
              className="flex flex-col gap-[30px] items-center w-full"
              orientation="vertical"
            >
              <AccountInformationButton
                image={"images/img_comment11.png"}
                text={"내가 쓴 댓글"}
              />
              <AccountInformationButton
                image={"images/img_reload1.png"}
                text={"비밀번호 변경하기"}
              />
              <AccountInformationButton
                image={"images/img_confused1.png"}
                text={"제재 내역 보기"}
              />
              <AccountInformationButton
                image={"images/img_image839.png"}
                text={"계정 탈퇴하기"}
              />
            </List>
          </div>
        </div>
      </Layout>
    </>
  );
};

const AccountInformationButton = ({ image, text }) => {
  return (
    <div
      className="border-2 border-blue_gray-900 border-solid 
              flex flex-col items-center justify-center my-0 p-2 rounded-[16px] max-w-[350px] w-full"
    >
      <div className="flex flex-row h-[38px] md:h-auto items-center justify-start w-[250px]">
        <Img className="h-[35px] md:h-auto object-cover w-[35px]" src={image} />
        <Text
          className="text-center flex-grow text-base text-black-900 tracking-[-0.30px]"
          size="txtInterMedium16Black900_1"
        >
          {text}
        </Text>
      </div>
    </div>
  );
};

export default AccountInformationPage;
