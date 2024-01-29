import React, { useState } from "react";

import { Img, Layout, Text } from "components";
import MyReplyListMyreplyrow from "components/MyReplyListMyreplyrow";

const MyReplyListPage = () => {
  const [replyList, setReplyList] = useState(
    Array(5).fill({
      content: "댓글내용",
      creDate: "2032.02.22",
      taleTitle: "토끼와 호랑이",
    })
  );
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center mt-1.5 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-[30px] h-[748px] md:h-auto items-center justify-start max-w-[1180px] mx-auto py-[30px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.53px]"
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
            <div
              className="flex flex-col gap-5 items-end justify-start p-2.5
                        max-w-[1180px] w-full border-t-gray-600 border-t-[1px]"
            >
              {replyList.map((reply, index) => {
                return (
                  <>
                    <MyReplyListMyreplyrow
                      className="py-2 border-b-[1px] border-b-gray-700"
                      {...reply}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default MyReplyListPage;
