import React from "react";

import { Button, Footer, Img, Line, List, MainHeader, Text } from "components";
import RecentViewRowrectangleten from "components/RecentViewRowrectangleten";
import { Navbar } from "components";

const RecentViewPage = () => {
  const recentViewRowrectangletenPropList = [
    {},
    {
      threehundredeleven:
        "신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커",
    },
    {
      threehundredeleven:
        "신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커",
    },
    {
      threehundredeleven:
        "신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto shadow-bs w-auto sm:w-full md:w-full">
        <MainHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <Navbar className="flex flex-col items-center justify-start w-full" />
        <div className="flex flex-col gap-2.5 items-start justify-start max-w-[1180px] mx-auto pb-[100px] pt-[30px] md:px-5 w-full">
          <div className="flex flex-col gap-2.5 items-start justify-start p-2.5 w-full">
            <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-auto sm:w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.31px] w-auto"
                size="txtInterMedium28Gray900"
              >
                최근 본 동화
              </Text>
              <Text
                className="text-base text-gray-600_02 tracking-[-0.18px] w-full"
                size="txtInterLight16"
              >
                전체 90 (최근에 감상한 동화 목록 입니다)
              </Text>
            </div>
            <Text
              className="text-base text-gray-900 tracking-[-0.18px] w-auto"
              size="txtInterMedium16"
            >
              ※이력은 100건까지 저장됩니다
            </Text>
          </div>
          <List
            className="flex flex-col gap-2.5 items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <Line className="bg-gray-400_04 h-px w-full" />
                <Text
                  className="ml-4 md:ml-[0] text-base text-gray-900 tracking-[-0.18px]"
                  size="txtInterMedium16Gray900"
                >
                  2023. 10. 08
                </Text>
                <Line className="bg-gray-400_05 h-px w-full" />
              </div>
              <div className="flex flex-col items-start justify-between w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <RecentViewRowrectangleten className="flex sm:flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-[550px] sm:w-full" />
                    <RecentViewRowrectangleten
                      className="flex sm:flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-[550px] sm:w-full"
                      threehundredeleven="신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <RecentViewRowrectangleten
                      className="flex sm:flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-[550px] sm:w-full"
                      threehundredeleven="신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커"
                    />
                    <RecentViewRowrectangleten
                      className="flex sm:flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-[550px] sm:w-full"
                      threehundredeleven="신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커"
                    />
                  </div>
                  <RecentViewRowrectangleten
                    className="flex sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-[550px] sm:w-full"
                    threehundredeleven="신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <Line className="bg-gray-400_04 h-px w-full" />
                <Text
                  className="ml-4 md:ml-[0] text-base text-gray-900 tracking-[-0.18px]"
                  size="txtInterMedium16Gray900"
                >
                  2023. 10. 07
                </Text>
                <Line className="bg-gray-400_05 h-px w-full" />
              </div>
              <div className="flex flex-col items-start justify-between w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="gap-20 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    {recentViewRowrectangletenPropList.map((props, index) => (
                      <React.Fragment key={`RecentViewRowrectangleten${index}`}>
                        <RecentViewRowrectangleten
                          className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
        <Footer
          className="w-full flex gap-2.5 items-center justify-center
                  bg-blue_gray-50_02 md:px-5"
        />
      </div>
    </>
  );
};

export default RecentViewPage;
