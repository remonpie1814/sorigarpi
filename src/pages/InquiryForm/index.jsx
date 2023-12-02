import React from "react";

import { Button, Img, Text } from "components";
import Header from "components/Header";
import Navbar from "components/Navbar";

const InquiryFormPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[498px] w-full">
        <Header className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <Navbar className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
        <div className="flex flex-col gap-10 items-start justify-start max-w-[1180px] mx-auto md:px-5 py-[30px] w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.53px] w-[139px]"
            size="txtInterMedium28Gray900"
          >
            1:1 문의내역
          </Text>
          <div className="flex flex-row gap-[11px] items-start justify-start w-auto sm:w-full">
            <Text
              className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-10"
              size="txtInterMedium22Black900"
            >
              분류
            </Text>
            <div className="bg-blue_gray-100 flex flex-col items-start justify-start rounded-[5px] w-auto">
              <div className="flex flex-row gap-[98px] items-end justify-end w-[52%] md:w-full">
                <Text
                  className="mb-1 mt-[7px] text-base text-black-900 text-center tracking-[-0.30px]"
                  size="txtInterMedium16Black900"
                >
                  기타
                </Text>
                <Img
                  className="h-8 md:h-auto object-cover w-8"
                  src="images/img_down11_32x32.png"
                  alt="downEleven"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[9px] items-start justify-start w-auto md:w-full">
            <Text
              className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-[39px]"
              size="txtInterMedium22Black900"
            >
              내용
            </Text>
            <div className="bg-gray-100_01 h-[352px] w-full"></div>
          </div>
          <Text
            className="text-base text-black-900 text-center w-full"
            size="txtInterRegular16Black900"
          >
            <>
              -1:1 문의처리 내역은 마이페이지 &gt; 1:1 문의를 통해 확인할 수
              있습니다.
            </>
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[74px] items-start justify-start w-auto md:w-full">
            <Button
              className="cursor-pointer rounded-[10px] text-[22px] text-center sm:text-lg md:text-xl w-[553px]"
              color="blue_gray_100"
              size="2xl"
              variant="fill"
            >
              취소
            </Button>
            <Button
              className="cursor-pointer rounded-[10px] text-[22px] text-center sm:text-lg md:text-xl w-[553px]"
              color="amber_A100"
              size="2xl"
              variant="fill"
            >
              작성하기
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InquiryFormPage;
