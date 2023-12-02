import React from "react";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";
import Navbar from "components/Navbar";
import SanctionHistoryColumn from "components/SanctionHistoryColumn";

const SanctionHistoryPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <Navbar className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
        <div className="flex flex-col gap-[27px] items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-center max-w-[1180px] pb-2.5 pt-[30px] px-2.5 w-full">
            <div className="flex flex-col gap-[19px] items-center justify-start max-w-[1180px] w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.53px] w-[163px]"
                size="txtInterMedium28Gray900"
              >
                제재 내역 보기
              </Text>
              <Text
                className="text-base text-center text-red-A700 tracking-[-0.30px] w-auto"
                size="txtInterMedium16RedA700"
              >
                경고 3회가 누적되면 로그인이 차단됩니다.
              </Text>
            </div>
          </div>
          <List
            className="flex flex-col gap-[27px] items-center w-full"
            orientation="vertical"
          >
            <SanctionHistoryColumn className="bg-white-A700 border border-gray-400_03 border-solid flex flex-1 flex-col items-start justify-start max-w-[1180px] rounded w-full" />
            <SanctionHistoryColumn className="bg-white-A700 border border-gray-400_03 border-solid flex flex-1 flex-col items-start justify-start max-w-[1180px] rounded w-full" />
          </List>
          <Button
            className="cursor-pointer font-medium h-[74px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.24px] w-[308px]"
            shape="round"
            color="blue_gray_100_01"
            size="2xl"
            variant="fill"
          >
            이메일 문의하기
          </Button>
        </div>
      </div>
    </>
  );
};

export default SanctionHistoryPage;
