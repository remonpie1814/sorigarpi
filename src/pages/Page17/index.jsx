import React from "react";

import { Button, Img, Text } from "components";
import Pagebuttons from "components/Pagebuttons";
import Recordbuttons1 from "components/Recordbuttons1";
import Row1 from "components/Row1";

const Page17 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Row1 className="bg-yellow-100 flex flex-row h-[50px] md:h-auto items-center justify-start max-w-[1920px] shadow-bs w-full" />
        <div className="flex md:flex-col flex-row gap-[50px] h-full items-start justify-between sm:px-5 px-[30px] w-full">
          <div className="bg-white-A700 flex flex-1 flex-col h-[1010px] md:h-auto items-center justify-center max-w-[720px] md:px-5 w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start w-auto">
              <Img
                className="h-[786px] sm:h-auto object-cover rounded-bl-[5px] rounded-br-[5px] w-[600px] md:w-full"
                src="images/img_image932.png"
                alt="image932"
              />
              <Pagebuttons className="flex flex-row gap-[30px] items-start justify-center w-auto" />
            </div>
          </div>
          <Recordbuttons1 className="flex flex-1 flex-col gap-2.5 h-[1010px] md:h-auto items-center justify-center max-w-[1100px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default Page17;
