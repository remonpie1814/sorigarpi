import React from "react";

import { Img, Layout, Text } from "components";
import TaleSettingTemporarysave1 from "components/TaleSettingTemporarysave1";

const TaleSettingPage = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col md:gap-10 gap-[65px] h-[1214px] md:h-auto items-center justify-start max-w-[1180px] mx-auto pt-[30px] md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full gap-5 px-5 pb-5 border-b border-gray-600 border-solid">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.53px] w-full"
                size="txtInterMedium28Gray900"
              >
                동화 설정하기
              </Text>
            </div>
            <div className="flex flex-row items-start justify-start w-full md:flex-col md:gap-5">
              <Img
                className="h-[426px] sm:h-auto max-h-[426px] object-cover sm:w-[] md:m-auto"
                src="images/img_fairytaleimage.png"
                alt="fairytaleimage"
              />
              <div className="flex flex-1 flex-col gap-8 h-[436px] md:h-auto items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-center w-full h-[25%]">
                  <Text
                    className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
                    size="txtInterMedium22Black900_1"
                  >
                    제목
                  </Text>
                  <textarea className="bg-gray-100_01 h-[100%] w-[78%] md:w-[90%] sm:w-[100%] resize-none	"></textarea>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-center w-full h-[60%]">
                  <Text
                    className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
                    size="txtInterMedium22Black900_1"
                  >
                    설명
                  </Text>
                  <textarea className="bg-gray-100_01 h-[100%] w-[78%] md:w-[90%] sm:w-[100%] resize-none	"></textarea>
                </div>
              </div>
            </div>
          </div>
          <TaleSettingTemporarysave1 className="border border-blue_gray-100_01 border-solid flex flex-col gap-2 items-center justify-start max-w-[1180px] p-5 shadow-bs w-full" />
        </div>
      </Layout>
    </>
  );
};

export default TaleSettingPage;
