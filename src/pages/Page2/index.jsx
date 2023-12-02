import React from "react";

import { Button, Img, Text } from "components";
import Columnfortynine from "components/Columnfortynine";
import Header from "components/Header";
import TaleDetailColumnlanguage from "components/TaleDetailColumnlanguage";

const Page2 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <div className="flex flex-col items-center justify-end max-w-[1180px] mx-auto md:px-5 w-full">
          <TaleDetailColumnlanguage className="flex flex-col items-center justify-start w-full" />
          <div className="flex flex-col h-[1086px] md:h-auto items-center justify-start max-w-[1180px] pb-5 pt-[30px] w-full">
            <Columnfortynine className="flex flex-col gap-[15px] items-center justify-start w-auto md:w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
