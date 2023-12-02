import React from "react";

import { Img, Line, List, Text } from "components";
import Header from "components/Header";
import InquiryHistoryColumn from "components/InquiryHistoryColumn";
import Navbar from "components/Navbar";

const InquiryHistoryPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[482px] w-full">
        <Header className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <Navbar className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
        <div className="flex flex-col gap-[30px] items-start justify-start max-w-[1180px] mx-auto md:px-5 py-[30px] w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.53px] w-[139px]"
            size="txtInterMedium28Gray900"
          >
            1:1 문의내역
          </Text>
          <InquiryHistoryColumn className="flex flex-col items-start justify-start w-auto md:w-full" />
          <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-auto md:w-full">
                <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1180px] w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center tracking-[-0.53px] w-[22px]"
                      size="txtInterBold28"
                    >
                      Q
                    </Text>
                    <Text
                      className="text-base text-center text-red-A700_01 tracking-[-0.30px] w-14"
                      size="txtInterRegular16"
                    >
                      답변대기
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-auto">
                    <Text
                      className="text-base text-black-900 text-center tracking-[-0.30px] w-7"
                      size="txtInterBold16Black900"
                    >
                      수정
                    </Text>
                    <Text
                      className="text-base text-black-900 text-center tracking-[-0.30px] w-[29px]"
                      size="txtInterBold16Black900"
                    >
                      삭제
                    </Text>
                  </div>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[1115px] md:max-w-full text-base text-black-900 tracking-[-0.30px]"
                  size="txtInterRegular16Black900"
                >
                  문의 내용 문의 내용문의 내용문의 내용문의 내용문의 내용문의
                  내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                  내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                  내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                  내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                  내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                  내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                  내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                  내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                  내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                  내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                  내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                  내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                </Text>
              </div>
              <Line className="bg-gray-200_01 h-px w-full" />
            </div>
            <List
              className="flex flex-col gap-[19px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto md:w-full">
                  <div className="flex flex-col items-center justify-start max-w-[1180px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center tracking-[-0.53px] w-[22px]"
                        size="txtInterBold28"
                      >
                        Q
                      </Text>
                      <Text
                        className="text-base text-center text-indigo-A700 tracking-[-0.30px] w-[57px]"
                        size="txtInterRegular16IndigoA700"
                      >
                        답변완료
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[150.00%] text-base text-black-900 tracking-[-0.30px]"
                    size="txtInterRegular16Black900"
                  >
                    <>
                      문의 내용 문의 내용문의 내용문의 내용문의 내용문의
                      내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                      내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내
                      <br />
                      <br />
                      용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                      내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                      내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                      내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                      내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                      내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                    </>
                  </Text>
                </div>
                <Line className="bg-gray-200_01 h-px w-full" />
              </div>
              <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto md:w-full">
                  <div className="flex flex-col items-center justify-start max-w-[1180px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center tracking-[-0.53px] w-[22px]"
                        size="txtInterBold28"
                      >
                        Q
                      </Text>
                      <Text
                        className="text-base text-center text-indigo-A700 tracking-[-0.30px] w-[57px]"
                        size="txtInterRegular16IndigoA700"
                      >
                        답변완료
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[1115px] md:max-w-full text-base text-black-900 tracking-[-0.30px]"
                    size="txtInterRegular16Black900"
                  >
                    문의 내용 문의 내용문의 내용문의 내용문의 내용문의 내용문의
                    내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                    내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                    내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                    내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                    내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                    내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                    내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                    내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                    내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                    내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                    내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                    내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                    내용문의 내용문의 내용문의 내용문의 내용문의 내용문의
                    내용문의 내용문의 내용문의 내용문의 내용문의
                  </Text>
                </div>
                <Line className="bg-gray-200_01 h-px w-full" />
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default InquiryHistoryPage;
