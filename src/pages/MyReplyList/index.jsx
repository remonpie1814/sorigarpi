import React from "react";

import { Img, Text } from "components";
import MyReplyListMyreplyrow from "components/MyReplyListMyreplyrow";
import TaleDetailColumnlanguage from "components/TaleDetailColumnlanguage";

const MyReplyListPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto pb-[166px] w-full">
        <div className="flex flex-col items-center w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1180px] mx-auto md:px-5 w-full">
              <div className="flex flex-col items-center justify-center w-auto">
                <Img
                  className="h-[51px] md:h-auto object-cover w-[170px]"
                  src="images/img__51x170.png"
                  alt="twohundredforty"
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
        </div>
        <TaleDetailColumnlanguage className="flex flex-col items-center justify-start md:px-5 w-[62%] md:w-full" />
        <div className="flex flex-col items-center mt-1.5 md:px-10 sm:px-5 px-[370px] w-full">
          <div className="flex flex-col gap-[30px] h-[748px] md:h-auto items-center justify-start max-w-[1180px] mx-auto py-[30px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.53px] w-[140px]"
                size="txtInterMedium28Gray900"
              >
                내가 쓴 댓글
              </Text>
            </div>
            <div className="bg-orange-50 flex flex-col gap-2.5 h-[100px] md:h-auto items-center justify-center px-10 sm:px-5 py-[15px] rounded-[10px] w-[200px]">
              <Text
                className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
                size="txtInterMedium22Black900_1"
              >
                총 댓글 수
              </Text>
              <Text
                className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
                size="txtInterMedium22Black900_1"
              >
                5
              </Text>
            </div>
            <div className="flex flex-col gap-5 items-end justify-start max-w-[1180px] outline outline-gray-600_01 p-2.5 w-full">
              <MyReplyListMyreplyrow className="flex flex-col gap-[3px] items-start justify-start outline outline-gray-400 w-full" />
              <MyReplyListMyreplyrow
                className="flex flex-col gap-[3px] items-start justify-start outline outline-gray-400 w-full"
                textone="작가 초심 잃었네ㅡㅡ"
                texttwo="2023.11.02 11:03"
                textthree="호랑이와 토끼"
              />
              <MyReplyListMyreplyrow
                className="flex flex-col gap-[3px] items-start justify-start outline outline-gray-400 w-full"
                textone="뇌절 ㄴ"
                texttwo="2023.11.22 11:04"
                textthree="토끼와 호랑이2"
              />
              <MyReplyListMyreplyrow
                className="flex flex-col gap-[3px] items-start justify-start outline outline-gray-400 w-full"
                textone="이제 안 봄 ㅅㄱ"
                texttwo="2023.12.02 13:22"
                textthree="토끼와 호랑이 파이널"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyReplyListPage;
