import React from "react";

import { Button, Img, Text } from "components";
import Recordbuttons from "components/Recordbuttons";
import Row1 from "components/Row1";

const Page18 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-2.5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Row1 className="bg-yellow-100 flex flex-row h-[50px] md:h-auto items-center justify-start max-w-[1920px] shadow-bs w-full" />
        <div className="bg-white-A700 flex flex-col h-full items-center justify-center w-full">
          <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[660px] w-auto md:w-full">
            <Img
              className="h-[786px] sm:h-auto object-cover rounded-[5px] w-[600px] md:w-full"
              src="images/img_image932.png"
              alt="image932"
            />
          </div>
        </div>
        <Recordbuttons className="flex flex-col gap-2.5 h-[231px] md:h-auto items-center justify-center w-full" />
      </div>
    </>
  );
};

export default Page18;
