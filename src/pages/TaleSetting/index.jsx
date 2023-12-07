import React from "react";

import { Button, CheckBox, Img, Text } from "components";
import Navbar from "components/Navbar";
import TaleSettingTemporarysave1 from "components/TaleSettingTemporarysave1";

const TaleSettingPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1180px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-center px-4 w-auto">
              <Img
                className="h-[51px] md:h-auto object-cover w-[170px]"
                src="images/img__51x170.png"
                alt="threehundrednin"
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
                alt="menueleven"
              />
            </div>
          </div>
        </div>
        <Navbar className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
        <div className="flex flex-col md:gap-10 gap-[65px] h-[1214px] md:h-auto items-center justify-start max-w-[1180px] mx-auto pt-[30px] md:px-5 w-full">
          <div className="border-b border-gray-600 border-solid flex flex-col gap-5 items-center justify-start px-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.53px] w-full"
                size="txtInterMedium28Gray900"
              >
                동화 설정하기
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Img
                className="h-[426px] sm:h-auto max-h-[426px] object-cover sm:w-[] md:w-[]"
                src="images/img_fairytaleimage.png"
                alt="fairytaleimage"
              />
              <div className="flex flex-1 flex-col gap-8 h-[436px] md:h-auto items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-center w-full">
                  <Text
                    className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
                    size="txtInterMedium22Black900_1"
                  >
                    제목
                  </Text>
                  <div className="bg-gray-100_01 h-[90px] w-[78%]"></div>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-center px-4 py-[19px] w-full">
                  <Text
                    className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
                    size="txtInterMedium22Black900_1"
                  >
                    설명
                  </Text>
                  <div className="bg-gray-100_01 h-[267px] w-[82%]"></div>
                </div>
              </div>
            </div>
          </div>
          <TaleSettingTemporarysave1 className="border border-blue_gray-100_01 border-solid flex flex-col gap-2 items-center justify-start max-w-[1180px] p-5 shadow-bs w-full" />
        </div>
      </div>
    </>
  );
};

export default TaleSettingPage;
