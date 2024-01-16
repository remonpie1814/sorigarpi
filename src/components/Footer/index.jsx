import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="bg-gray-100_01 flex flex-col items-center justify-center pb-[30px] sm:px-5 px-[30px] w-full">
          <div className="flex flex-col gap-[25px] items-center justify-start max-w-[1180px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-start justify-center max-w-[1180px] md:px-10 sm:px-5 px-[60px] py-[25px] w-full">
              <div className="flex flex-col items-start justify-start pr-1.5 py-1.5">
                <Text
                  className="text-base text-black-900 tracking-[-0.30px]"
                  size="txtInterMedium16Black900_1"
                >
                  고객센터
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start p-[5px]">
                <Text
                  className="md:ml-[0] ml-[5px] text-base text-black-900 text-center tracking-[-0.30px]"
                  size="txtInterMedium16Black900_1"
                >
                  공지사항
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 items-start justify-center md:px-10 sm:px-5 px-[60px] py-2.5 w-full">
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
            <Img
              className="h-[92px] w-full"
              src="images/img__blue_gray_100.svg"
              alt="TwoHundredSixtySix"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
