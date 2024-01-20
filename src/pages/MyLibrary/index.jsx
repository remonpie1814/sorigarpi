import React from "react";

import { Button, Img, List, MainHeader, Navbar, Text } from "components";
import CustomerServiceColumnOne from "components/CustomerServiceColumnOne";
import MyLibraryInforow from "components/MyLibraryInforow";
import MyLibraryPaging from "components/MyLibraryPaging";
import MyLibraryRowrectangleten from "components/MyLibraryRowrectangleten";

const MyLibraryPage = () => {
  const myLibraryRowrectangletenPropList = [
    {},
    { textfive: "유미엄마" },
    { textfive: "유미엄마" },
    { textfive: "유미엄마" },
    {
      textfive: "유미엄마",
      textone: "호랑이와 토끼가 살았는데 결국 나중에 멸종함",
    },
    { textfive: "유미엄마" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <MainHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <Navbar className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
        <div className="flex flex-col gap-10 h-[1482px] md:h-auto items-center justify-start max-w-[1180px] mx-auto md:px-5 py-[31px] w-full">
          <div className="bg-white-A700 flex flex-row md:gap-10 items-start justify-between py-[3px] w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px]"
              size="txtInterMedium28"
            >
              내 책장
            </Text>
            <Button
              className="cursor-pointer font-medium min-w-[120px] my-0.5 text-base text-center tracking-[-0.30px]"
              shape="round"
              color="blue_gray_50"
              size="md"
              variant="fill"
            >
              임시저장
            </Button>
          </div>
          <CustomerServiceColumnOne
            className="flex flex-col gap-8 items-start justify-center w-full"
            dynamictext="호랑이"
          />
          <List
            className="flex flex-col items-center w-full"
            orientation="vertical"
          >
            <div className="bg-white-A700 border-blue_gray-100_01 border-solid border-y flex flex-1 flex-row md:gap-10 gap-[70px] items-start justify-start my-0 py-[15px] w-full">
              <Text
                className="text-base text-black-900 tracking-[-0.30px] w-[60px]"
                size="txtInterMedium16Black900_1"
              >
                공개 범위
              </Text>
              <Text
                className="text-base text-black-900 tracking-[-0.30px] w-[29px]"
                size="txtInterBold16Black900"
              >
                모두
              </Text>
              <Text
                className="text-base text-blue_gray-100_01 tracking-[-0.30px] w-[61px]"
                size="txtInterMedium16Bluegray10001"
              >
                전체 공개
              </Text>
              <Text
                className="text-base text-blue_gray-100_01 tracking-[-0.30px] w-[42px]"
                size="txtInterMedium16Bluegray10001"
              >
                비공개
              </Text>
            </div>
            <div className="border-b border-blue_gray-100_cc border-solid flex flex-1 flex-row md:gap-10 gap-[70px] items-start justify-start my-0 py-[15px] w-full">
              <Text
                className="text-base text-black-900 tracking-[-0.30px] w-[29px]"
                size="txtInterMedium16Black900_1"
              >
                분류
              </Text>
              <Text
                className="text-base text-blue_gray-100_01 tracking-[-0.30px] w-[29px]"
                size="txtInterMedium16Bluegray10001"
              >
                모두
              </Text>
              <Text
                className="text-base text-black-900 tracking-[-0.30px] w-11"
                size="txtInterBold16Black900"
              >
                그림만
              </Text>
              <Text
                className="text-base text-blue_gray-100_01 tracking-[-0.30px] w-11"
                size="txtInterMedium16Bluegray10001"
              >
                녹음만
              </Text>
            </div>
          </List>
          <MyLibraryInforow className="flex flex-col gap-[15px] items-start justify-center w-full" />
          <div className="flex flex-col gap-[15px] items-center justify-start w-full">
            <div className="flex flex-col items-center justify-end max-w-[1180px] w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-row items-center justify-center w-auto">
                  <Text
                    className="text-base text-gray-900 tracking-[-0.30px] w-auto"
                    size="txtInterMedium16Gray900"
                  >
                    최신순
                  </Text>
                  <Img
                    className="h-8 md:h-auto object-cover w-8"
                    src="images/img_down11_32x32.png"
                    alt="downEleven"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="gap-20 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  {myLibraryRowrectangletenPropList.map((props, index) => (
                    <React.Fragment key={`MyLibraryRowrectangleten${index}`}>
                      <MyLibraryRowrectangleten
                        className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-[69px] md:h-auto items-center justify-end w-full">
            <div className="md:h-16 h-[69px] pb-[5px] relative w-[70px]">
              <div className="bg-amber-A100 h-16 mx-auto rounded-[35px] w-full"></div>
              <Text
                className="absolute h-max inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-max"
                size="txtInterMedium24"
              >
                +
              </Text>
            </div>
          </div>
          <MyLibraryPaging className="flex flex-col gap-8 items-center justify-center w-full" />
        </div>
      </div>
    </>
  );
};

export default MyLibraryPage;
