import React from "react";

import { Button, Img, Text } from "components";
import FollowListNavbar from "components/FollowListNavbar";
import MyLibraryPaging from "components/MyLibraryPaging";
import SearchResultHeader from "components/SearchResultHeader";
import TempTaleListTemptalerow from "components/TempTaleListTemptalerow";

const TempTaleListPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <SearchResultHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <FollowListNavbar className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
        <div className="flex flex-col gap-5 items-center justify-start max-w-[1180px] mx-auto pb-5 pt-[30px] md:px-5 w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 w-full"
            size="txtInterMedium28Gray900"
          >
            임시 저장
          </Text>
          <div className="flex flex-col items-center justify-start pb-1 w-full">
            <div className="flex flex-col items-end justify-start w-full">
              <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="mt-[3px] text-[22px] text-gray-900 sm:text-lg md:text-xl"
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
              <Button
                className="cursor-pointer font-medium min-w-[100px] mr-[3px] text-base text-center tracking-[-0.18px]"
                shape="square"
                color="blue_gray_100"
                size="sm"
                variant="fill"
              >
                삭제
              </Button>
            </div>
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

export default TempTaleListPage;
