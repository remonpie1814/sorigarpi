import React from "react";

import { Button, Footer, Img, List, MainHeader, Text } from "components";
import { Navbar } from "components";

const ProfilePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <MainHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <Navbar className="flex flex-col items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full" />
        <div className="flex flex-col gap-[35px] items-center justify-start max-w-[720px] pb-5 pt-[30px] md:px-5 w-full">
          <Text
            className="bg-white-A700 h-[42px] justify-center sm:pr-5 pr-[35px] py-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px] w-full"
            size="txtInterMedium28"
          >
            내 프로필
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-10 gap-[140px] items-center justify-center w-full">
            <Img
              className="h-[120px] md:h-auto object-cover w-[120px]"
              src="images/img__120x120.png"
              alt="SixtySeven"
            />
            <Text
              className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray900"
            >
              현진
            </Text>
            <List
              className="sm:flex-1 sm:flex-col flex-row md:gap-10 gap-[140px] grid grid-cols-2 w-[32%] sm:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-2 items-center justify-center w-auto">
                <Text
                  className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                  size="txtInterMedium16Gray900"
                >
                  팔로워
                </Text>
                <Text
                  className="text-base text-center text-gray-900 tracking-[-0.18px]"
                  size="txtInterMedium16Gray900"
                >
                  40
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center w-auto">
                <Text
                  className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                  size="txtInterMedium16Gray900"
                >
                  팔로잉
                </Text>
                <Text
                  className="text-base text-center text-gray-900 tracking-[-0.18px]"
                  size="txtInterMedium16Gray900"
                >
                  40
                </Text>
              </div>
            </List>
          </div>
          <Button
            className="cursor-pointer font-medium min-w-[137px] rounded-[10px] text-base text-center tracking-[-0.30px]"
            color="amber_A100"
            size="md"
            variant="fill"
          >
            프로필 수정
          </Button>
          <div className="md:h-[150px] h-[196px] py-[23px] relative w-full">
            <div className="bg-gray-300 h-[150px] m-auto w-full"></div>
            <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto p-3.5">
              <Text
                className="mb-[41px] mt-[30px] text-base text-black-900 text-center tracking-[-0.30px]"
                size="txtInterMedium16Black900_1"
              >
                자기소개
              </Text>
            </div>
          </div>
          <div className="flex flex-row sm:gap-10 items-center justify-between py-[3px] w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.31px]"
              size="txtInterMedium28Gray900"
            >
              내 책장
            </Text>
            <div className="flex flex-row items-center justify-start w-auto">
              <Text
                className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                size="txtInterMedium16Gray900"
              >
                전체 보기
              </Text>
              <Img
                className="h-8 md:h-auto object-cover w-8"
                src="images/img_down11.png"
                alt="downEleven"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:gap-5 gap-[60px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="border border-black-900 border-solid flex flex-1 flex-col items-center justify-start pb-1.5 rounded-[20px] w-full">
                <Img
                  className="h-[194px] md:h-auto object-cover rounded-[20px] w-full"
                  src="images/img_image917.png"
                  alt="image917"
                />
              </div>
              <div className="border border-black-900 border-solid flex flex-1 flex-col items-center justify-start pb-1.5 rounded-[20px] w-full">
                <Img
                  className="h-[194px] md:h-auto object-cover rounded-[20px] w-full"
                  src="images/img_image917.png"
                  alt="image917"
                />
              </div>
              <div className="border border-black-900 border-solid flex flex-1 flex-col items-center justify-start pb-1.5 rounded-[20px] w-full">
                <Img
                  className="h-[194px] md:h-auto object-cover rounded-[20px] w-full"
                  src="images/img_image917.png"
                  alt="image917"
                />
              </div>
              <div className="border border-black-900 border-solid flex flex-1 flex-col items-center justify-start pb-1.5 rounded-[20px] w-full">
                <Img
                  className="h-[194px] md:h-auto object-cover rounded-[20px] w-full"
                  src="images/img_image917.png"
                  alt="image917"
                />
              </div>
              <div className="border border-black-900 border-solid flex flex-1 flex-col items-center justify-start pb-1.5 rounded-[20px] w-full">
                <Img
                  className="h-[194px] md:h-auto object-cover rounded-[20px] w-full"
                  src="images/img_image917.png"
                  alt="image917"
                />
              </div>
              <div className="border border-black-900 border-solid flex flex-1 flex-col items-center justify-start pb-1.5 rounded-[20px] w-full">
                <Img
                  className="h-[194px] md:h-auto object-cover rounded-[20px] w-full"
                  src="images/img_image917.png"
                  alt="image917"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer
          className="w-full flex gap-2.5 items-center justify-center
                  bg-blue_gray-50_02 md:px-5"
        />
      </div>
    </>
  );
};

export default ProfilePage;
