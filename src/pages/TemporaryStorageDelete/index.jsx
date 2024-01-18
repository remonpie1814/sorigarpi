import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, MainHeader, Navbar, Text } from "components";
import MyLibraryPaging from "components/MyLibraryPaging";
import TempTaleListTemptalerow from "components/TempTaleListTemptalerow";

const TemporaryStorageDeletePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <MainHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <Navbar className="flex flex-col items-center justify-start p-2 w-full" />
        <div className="flex flex-col gap-5 items-center justify-start max-w-[1180px] mx-auto pb-5 pt-[30px] md:px-5 w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 w-full"
            size="txtInterMedium28Gray900"
          >
            임시 저장
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row md:gap-10 gap-[640px] items-start justify-between w-auto md:w-full">
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-[59px]"
                size="txtInterMedium22Gray900"
              >
                총 3개
              </Text>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-base text-center text-gray-400 tracking-[-0.18px] w-auto"
                  size="txtInterMedium16Gray400"
                >
                  임시저장은 100개까지만 저장됩니다
                </Text>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start pr-[3px] w-full">
            <Button
              className="cursor-pointer font-medium min-w-[100px] sm:mt-0 mt-0.5 text-base text-center tracking-[-0.18px]"
              shape="square"
              color="blue_gray_100"
              size="sm"
              variant="fill"
            >
              전체 선택
            </Button>
            <Button
              className="common-pointer cursor-pointer font-medium mb-0.5 min-w-[100px] sm:ml-[0] ml-[846px] text-base text-center tracking-[-0.18px]"
              onClick={() => navigate("/temptalelist")}
              shape="square"
              color="blue_gray_100"
              size="sm"
              variant="fill"
            >
              취소
            </Button>
            <Button
              className="cursor-pointer font-medium mb-0.5 min-w-[100px] sm:ml-[0] ml-[31px] text-base text-center tracking-[-0.18px]"
              shape="square"
              color="blue_gray_100"
              size="sm"
              variant="fill"
            >
              삭제
            </Button>
          </div>
          <div className="flex flex-col items-start justify-between w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="gap-20 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                {new Array(6).fill({}).map((props, index) => (
                  <React.Fragment key={`TempTaleListTemptalerow${index}`}>
                    <TempTaleListTemptalerow
                      className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <MyLibraryPaging className="flex flex-col gap-8 items-center justify-center w-full" />
        </div>
      </div>
    </>
  );
};

export default TemporaryStorageDeletePage;
