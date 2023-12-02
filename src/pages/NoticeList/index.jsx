import React from "react";

import { Img, Text } from "components";
import Header from "components/Header";
import Navbar from "components/Navbar";
import NoticeListRowonehundredtwentythree from "components/NoticeListRowonehundredtwentythree";

const NoticeListPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <Navbar className="flex flex-col items-center justify-start outline outline-blue_gray-100_01 p-2 w-full" />
        <Text
          className="bg-white-A700 h-[78px] justify-center sm:px-5 px-[35px] py-[21px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px] w-full"
          size="txtInterMedium28"
        >
          공지사항
        </Text>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-end max-w-[1920px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-end justify-start w-full">
                  <div className="flex flex-row items-start justify-end mr-[524px] md:px-5 w-[6%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 text-right sm:text-xl tracking-[-0.46px]"
                      size="txtInterMedium24Gray900"
                    >
                      최신순
                    </Text>
                    <div className="flex flex-col items-center justify-start w-[42px]">
                      <Text
                        className="rotate-[-90deg] md:text-3xl sm:text-[28px] text-[32px] text-gray-900 text-right tracking-[-0.70px] w-auto"
                        size="txtInterMedium32"
                      >
                        <>&lt;</>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[29px] items-center justify-center md:px-5 py-[37px] w-auto md:w-full">
          <NoticeListRowonehundredtwentythree className="bg-white-A700 border-b border-black-900_a5 border-solid flex md:flex-col flex-row md:gap-10 gap-[90px] h-[46px] md:h-auto items-center justify-start py-[9px] w-auto md:w-full" />
          <NoticeListRowonehundredtwentythree
            className="bg-white-A700 border-b border-black-900_a5 border-solid flex md:flex-col flex-row md:gap-10 gap-[90px] h-[46px] md:h-auto items-center justify-start py-[9px] w-auto md:w-full"
            userdate="2023. 08. 11"
          />
          <NoticeListRowonehundredtwentythree
            className="bg-white-A700 border-b border-black-900_a5 border-solid flex md:flex-col flex-row md:gap-10 gap-[90px] h-[46px] md:h-auto items-center justify-start py-[9px] w-auto md:w-full"
            userdate="2023. 08. 11"
          />
          <NoticeListRowonehundredtwentythree
            className="bg-white-A700 border-b border-black-900_a5 border-solid flex md:flex-col flex-row md:gap-10 gap-[90px] h-[46px] md:h-auto items-center justify-start py-[9px] w-auto md:w-full"
            userdate="2023. 08. 11"
          />
          <NoticeListRowonehundredtwentythree
            className="bg-white-A700 border-b border-black-900_a5 border-solid flex md:flex-col flex-row md:gap-10 gap-[90px] h-[46px] md:h-auto items-center justify-start py-[9px] w-auto md:w-full"
            userdate="2023. 08. 11"
          />
          <NoticeListRowonehundredtwentythree
            className="bg-white-A700 border-b border-black-900_a5 border-solid flex md:flex-col flex-row md:gap-10 gap-[90px] h-[46px] md:h-auto items-center justify-start py-[9px] w-auto md:w-full"
            userdate="2023. 08. 11"
          />
          <NoticeListRowonehundredtwentythree
            className="bg-white-A700 border-b border-black-900_a5 border-solid flex md:flex-col flex-row md:gap-10 gap-[90px] h-[46px] md:h-auto items-center justify-start py-[9px] w-auto md:w-full"
            userdate="2023. 08. 11"
          />
        </div>
        <footer className="flex h-[89px] md:h-auto items-center justify-center md:px-5 w-full">
          <ul className="flex flex-row gap-[33px] items-center justify-center p-2.5 w-1/5 md:w-full common-column-list">
            <li>
              <a
                href="javascript:"
                className="ml-[71px] text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px]"
              >
                <Text size="txtInterMedium22Gray600">2</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px]"
              >
                <Text size="txtInterMedium22Gray600">3</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="text-[22px] sm:text-lg text-orange-400 md:text-xl tracking-[-0.42px]"
              >
                <Text size="txtInterMedium22Orange400">4</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px]"
              >
                <Text size="txtInterMedium22Gray600">5</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="mr-[71px] text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px]"
              >
                <Text size="txtInterMedium22Gray600">6</Text>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default NoticeListPage;
