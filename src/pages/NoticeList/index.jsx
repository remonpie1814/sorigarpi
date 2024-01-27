import React, { useState } from "react";

import { Img, Layout, MapList, Text } from "components";
import NoticeRow from "components/NoticeListRowonehundredtwentythree";

const NoticeListPage = () => {
  const [noticeList, setNoticeList] = useState(
    Array(8).fill({
      category: "카테고리",
      title: "제모ㅁ모모모목",
      creDate: "2023.01.03",
    })
  );

  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-end max-w-[1180px] w-full">
          <Text
            className="bg-white-A700 h-[78px] justify-center py-4 sm:px-5 sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px] w-full"
            size="txtInterMedium28"
          >
            공지사항
          </Text>
          <div className="flex flex-col items-end justify-end w-full">
            <select
              className="border-none active:border-none focus:border-none font-bold"
              name=""
              id=""
            >
              <option value="" selected>
                최신순
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-[29px] items-center justify-center md:px-5 py-[37px] w-full">
            <MapList list={noticeList} ComponentName={NoticeRow} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NoticeListPage;
