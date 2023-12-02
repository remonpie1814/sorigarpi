import React from "react";

import { Button, Img, List, Text } from "components";
import Followuserrow from "components/Followuserrow";
import Navbar from "components/Navbar";

const Page3 = () => {
  const followuserrowPropList = [
    {},
    { followtext: "팔로우2" },
    { followtext: "콩림이" },
    { followtext: "콩솔이" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1180px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-center px-4 w-auto">
              <Img
                className="h-[51px] md:h-auto object-cover w-[170px]"
                src="images/img__51x170.png"
                alt="SixtySeven"
              />
            </div>
            <div className="flex flex-row gap-2.5 items-start justify-start py-2.5 w-auto">
              <Img
                className="h-12 md:h-auto object-cover w-12"
                src="images/img_bell111.png"
                alt="bell111"
              />
              <Img
                className="h-12 md:h-auto object-cover w-12"
                src="images/img_search111.png"
                alt="search111"
              />
              <Img
                className="h-12 md:h-auto object-cover w-12"
                src="images/img_menu11.png"
                alt="menuEleven"
              />
            </div>
          </div>
        </div>
        <Navbar className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
        <div className="border-b border-gray-300 border-solid flex flex-col gap-5 h-[603px] md:h-auto items-center justify-start max-w-[720px] pt-[30px] md:px-5 w-full">
          <div className="flex flex-row sm:gap-10 gap-20 items-start justify-center outline outline-gray-300 w-full">
            <div className="flex flex-col items-center justify-center pb-2.5 w-auto">
              <Text
                className="text-[22px] text-blue_gray-100_01 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
                size="txtInterMedium22Bluegray10001"
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
            {followuserrowPropList.map((props, index) => (
              <React.Fragment key={`Followuserrow${index}`}>
                <Followuserrow
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

export default Page3;
