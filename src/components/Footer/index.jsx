//** 정렬함 */

import React from "react";

import { Img, Text } from "components";

const Footer = ({ className }) => {
  return (
    <>
      <footer className={className}>
        <div className="bg-gray-100_01 flex flex-col items-center justify-center my-10 sm:px-5 px-[30px] w-full">
          <div className="flex flex-row gap-[25px] items-start justify-start max-w-[1180px] w-full">
            <div
              className="w-full flex flex-col gap-2.5 items-start justify-center 
                        py-2.5 md:px-10 sm:px-5"
            >
              <Text
                className="text-base text-black-900 tracking-[-0.30px]"
                size="txtInterMedium16Black900_1"
              >
                고객센터
              </Text>
              <Text
                className="text-base text-blue_gray-900 tracking-[-0.30px] w-auto"
                size="txtInterMedium16Bluegray900"
              >
                사업자 정보
              </Text>
              <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                <Text
                  className="text-base text-blue_gray-900 tracking-[-0.30px] w-auto"
                  size="txtInterMedium16Bluegray900"
                >
                  이용약관
                </Text>
                <Text
                  className="text-base text-blue_gray-400_01 tracking-[-0.30px] w-auto"
                  size="txtInterMedium16Bluegray40001"
                >
                  개인정보 처리방침
                </Text>
              </div>
            </div>
            <div
              className="w-full flex flex-col gap-2.5 items-start justify-center 
                        py-2.5 md:px-10 sm:px-5"
            >
              <Text
                className="text-base text-black-900 text-center tracking-[-0.30px]"
                size="txtInterMedium16Black900_1"
              >
                공지사항
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-[25px] items-start justify-start max-w-[1180px] w-full">
            <div className="w-[50px] h-[50px] rounded-full bg-slate-400"></div>
            <div className="w-[50px] h-[50px] rounded-full bg-slate-400"></div>
            <div className="w-[50px] h-[50px] rounded-full bg-slate-400"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
