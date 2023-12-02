import React from "react";

import { Button, Img, Text } from "components";
import ColumnOne from "components/ColumnOne";
import Header from "components/Header";
import Paging from "components/Paging";
import Rowrectangleten from "components/Rowrectangleten";
import TaleDetailColumnlanguage from "components/TaleDetailColumnlanguage";

const Page6 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <div className="flex flex-col items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full">
          <TaleDetailColumnlanguage className="flex flex-col items-center justify-start w-full" />
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1180px] pb-[60px] pt-[30px] w-full">
            <Text
              className="bg-white-A700 justify-center pb-[15px] sm:pr-5 pr-[35px] pt-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px] w-full"
              size="txtInterMedium28"
            >
              좋아요 누른 동화
            </Text>
            <ColumnOne className="flex flex-col gap-8 items-start justify-center w-full" />
            <div className="flex flex-col items-start justify-center w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-end max-w-[1180px] w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <div className="flex flex-row items-center justify-center w-auto">
                      <Text
                        className="text-base text-gray-900 tracking-[-0.30px] w-auto"
                        size="txtInterMedium16Gray900"
                      >
                        최신순
                      </Text>
                      <Img
                        className="h-8 md:h-auto object-cover w-8"
                        src="images/img_down11_32x32.png"
                        alt="downEleven"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[95%] md:w-full">
                  <div className="gap-2.5 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    {new Array(8).fill({}).map((props, index) => (
                      <React.Fragment key={`Rowrectangleten${index}`}>
                        <Rowrectangleten
                          className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Paging className="flex flex-col gap-8 items-center justify-center w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page6;
