import React, { useState } from "react";

import { Button, Img, Layout, Line, TaleInfo, Text } from "components";

const RecentViewPage = () => {
  const [historyList, setHistory] = useState([
    {
      date: "2023.10.08",
      data: Array(8).fill({
        title: "제목제목제목제목제목",
        writer: "작가가가가",
        page: "1111111",
        likeCount: "1239",
        commentCount: "54399",
        image: "images/img_rectangle10_180x140.png",
        creDate: "2099.12.22",
      }),
    },
    {
      date: "2023.10.07",
      data: Array(5).fill({
        title: "제목제목제목제목제목",
        writer: "작가가가가",
        page: "1111111",
        likeCount: "1239",
        commentCount: "54399",
        image: "images/img_rectangle10_180x140.png",
        creDate: "2099.12.22",
      }),
    },
  ]);

  return (
    <>
      <Layout>
        <div className="flex flex-col gap-2.5 items-start justify-start max-w-[1180px] mx-auto pb-[100px] pt-[30px] md:px-5 w-full">
          <div className="flex flex-col gap-2.5 items-start justify-start p-2.5 w-full">
            <div className="flex sm:flex-col flex-row gap-2.5 items-end justify-start w-full sm:w-full h-auto">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.31px] w-auto"
                size="txtInterMedium28Gray900"
              >
                최근 본 동화
              </Text>
              <Text
                className="flex flex-grow justify-end text-base text-gray-600_02 tracking-[-0.18px] h-full"
                size="txtInterLight16"
              >
                전체 90 (최근에 감상한 동화 목록 입니다)
              </Text>
            </div>
            <Text
              className="text-base text-gray-900 tracking-[-0.18px] w-auto"
              size="txtInterMedium16"
            >
              ※이력은 100건까지 저장됩니다
            </Text>
          </div>
          <div className="flex flex-col gap-2 w-full">
            {historyList.map((history, index) => {
              return (
                <>
                  <div className="flex flex-col gap-2 w-full">
                    <Line className="bg-gray-400_04 h-px w-full" />
                    <Text
                      className="ml-4 md:ml-[0] text-base text-gray-900 tracking-[-0.18px]"
                      size="txtInterMedium16Gray900"
                    >
                      {history.date}
                    </Text>
                    <Line className="bg-gray-400_05 h-px w-full" />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-1">
                    {history.data.map((tale, index) => {
                      return <TaleInfo {...tale} />;
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default RecentViewPage;
