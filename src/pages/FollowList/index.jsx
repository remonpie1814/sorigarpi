import React from "react";

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
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <MainHeader className="bg-white-A700 flex flex-col items-center justify-start p-[25px] sm:px-5 w-full" />
        <Navbar className="max-w-[1180px] mx-auto w-full" />
        <div className="border-b border-gray-300 border-solid flex flex-col gap-5 h-[603px] md:h-auto items-center justify-start max-w-[720px] pt-[30px] md:px-5 w-full">
          <div className="flex flex-row sm:gap-10 gap-20 items-start justify-center outline outline-gray-300 w-full">
            <div className="flex flex-col items-center justify-center pb-2.5 w-auto">
              <Text
                className="text-[22px] text-blue_gray-100_01 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
                size="txtInterMedium22"
              >
                팔로워
              </Text>
            </div>
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
            className="flex flex-col gap-5 items-center pb-5 w-full"
            orientation="vertical"
          >
            {followListFollowuserrowPropList.map((props, index) => (
              <React.Fragment key={`FollowListFollowuserrow${index}`}>
                <FollowListFollowuserrow
                  className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-center my-0 w-full"
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
