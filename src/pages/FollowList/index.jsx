import React from "react";
// 우주 수정 중

import { Button, Img, List, Text, MainHeader, Navbar } from "components";
import FollowListFollowuserrow from "components/FollowListFollowuserrow";

const FollowListPage = () => {
  const followListFollowuserrowPropList = [
    {},
    { followtext: "팔로우2" },
    { followtext: "콩림이" },
    { followtext: "콩솔이" },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-start w-auto mx-auto bg-white-A700 font-inter sm:w-full md:w-full">
        <MainHeader className="bg-white-A700 flex flex-col items-center justify-start p-[25px] sm:px-5 w-full" />
        <Navbar className="max-w-[1180px] mx-auto w-full" />
        <div className="border-b border-gray-300 border-solid flex flex-col gap-5 h-[603px] md:h-auto items-center justify-start max-w-[720px] pt-[30px] md:px-5 w-full">
          <div className="flex flex-row items-start justify-center w-full gap-20 border-b border-gray-300 border-solid sm:gap-10">
            <Button
              className="cursor-pointer font-medium min-w-[100px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px] text-blue_gray-100_01"
              shape="square"
              size="sm"
              variant="outline"
            >
              팔로워
            </Button>
            <Button
              className="cursor-pointer font-medium min-w-[100px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px]"
              shape="square"
              color="amber_A100"
              size="sm"
              variant="outline"
            >
              팔로우
            </Button>
          </div>
          <List
            className="flex flex-col items-center w-full gap-5 pb-5 "
            orientation="vertical"
          >
            {followListFollowuserrowPropList.map((props, index) => (
              <React.Fragment key={`FollowListFollowuserrow${index}`}>
                <FollowListFollowuserrow
                  className="flex flex-row items-center justify-center flex-1 w-full gap-5 my-0 sm:flex-col"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
        </div>
      </div>
    </>
  );
};

export default FollowListPage;
