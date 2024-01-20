import React from "react";

import { Button, Layout, Text } from "components";

const NoticeDetailPage = () => {
  return (
    <>
      <Layout>
        {" "}
        <div className="flex flex-col gap-[30px] items-end justify-start max-w-[1180px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-10 items-start justify-start pt-[30px] w-auto md:w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.53px] w-auto"
              size="txtInterBold28Gray900"
            >
              공지사항 제목
            </Text>
            <div className="flex flex-row gap-[58px] h-6 md:h-auto items-start justify-start w-60">
              <Text
                className="text-base text-black-900 text-center tracking-[-0.30px] w-full"
                size="txtInterRegular16Black900"
              >
                작성자
              </Text>
              <Text
                className="text-base text-black-900 text-center tracking-[-0.30px] w-full"
                size="txtInterRegular16Black900"
              >
                2023.10.06
              </Text>
            </div>
          </div>
          <div className="bg-gray-100_01 flex flex-col h-[499px] md:h-auto items-start justify-start max-w-[1180px] p-5 w-full">
            <Text
              className="text-base text-black-900 tracking-[-0.30px] w-auto"
              size="txtInterRegular16Black900"
            >
              공지사항 내용
            </Text>
          </div>
          <Button
            className="cursor-pointer rounded-[10px] text-base text-center w-[199px]"
            color="blue_gray_100"
            size="3xl"
            variant="fill"
          >
            목록으로
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default NoticeDetailPage;
