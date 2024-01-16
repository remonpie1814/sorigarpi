import React from "react";

import { Button, Img, Text } from "components";
import FollowingTaleColumnonehundredthree from "components/FollowingTaleColumnonehundredthree";
import SearchResultHeader from "components/SearchResultHeader";
import TaleDetailColumnlanguage from "components/TaleDetailColumnlanguage";

const FollowingTalePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <SearchResultHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <div className="flex flex-col items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full">
          <TaleDetailColumnlanguage className="flex flex-col items-center justify-start w-full" />
          <FollowingTaleColumnonehundredthree className="flex flex-col gap-10 items-center justify-start max-w-[1180px] pb-[60px] pt-[30px] w-full" />
        </div>
      </div>
    </>
  );
};

export default FollowingTalePage;
