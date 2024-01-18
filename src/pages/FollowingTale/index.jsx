import React from "react";

import { Button, Footer, Img, MainHeader, Text } from "components";
import FollowingTaleColumnonehundredthree from "components/FollowingTaleColumnonehundredthree";
import { Navbar } from "components";

const FollowingTalePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <MainHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <div className="flex flex-col items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full">
          <Navbar className="flex flex-col items-center justify-start w-full" />
          <FollowingTaleColumnonehundredthree className="flex flex-col gap-10 items-center justify-start max-w-[1180px] pb-[60px] pt-[30px] w-full" />
        </div>
        <Footer
          className="w-full flex gap-2.5 items-center justify-center
                  bg-blue_gray-50_02 md:px-5"
        />
      </div>
    </>
  );
};

export default FollowingTalePage;
