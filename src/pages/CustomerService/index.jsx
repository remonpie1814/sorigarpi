import React, { useState } from "react";

import { Button, Img, Layout, List, Paging, TabButton, Text } from "components";
import CustomerServiceFaqrow from "components/CustomerServiceFaqrow";

const CustomerServicePage = () => {
  // 페이지에 표시할 faq의 목록 state
  const [FAQList, setFAQ] = useState([
    {
      category: "회원정보",
      title: "탈퇴를 하고 싶어요",
      content: "탈퇴하려면 탈퇴버튼을 누르면 됩니다",
    },
  ]);
  // 페이징을 위한 state
  const [currentPage, setCurrentPage] = useState(1);
  // 탭 메뉴 관리를 위한 state
  const [tab, setTab] = useState(0);
  return (
    <>
      <Layout>
        <div className="flex flex-col gap-10 items-start justify-start max-w-[1180px] mx-auto pt-[30px] md:px-5 w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.53px] w-[53px]"
            size="txtInterMedium28Gray900"
          >
            FAQ
          </Text>
          <div className="flex flex-col items-start justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <form
                className="flex flex-row items-center justify-start
                            w-[27%] h-[46px] md:w-full"
              >
                <input
                  className="bg-blue_gray-50 h-full border-0"
                  type="text"
                  placeholder="검색"
                  name=""
                  id=""
                />
                <button className="bg-amber-A100 flex flex-col h-[46px] items-center justify-start p-1 w-[46px]">
                  <Img
                    className="h-[35px] md:h-auto object-cover"
                    src="images/img_image926.png"
                    alt="image926"
                  />
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-row gap-10 items-center justify-center max-w-[1155px] w-full">
            <TabButton index={0} tab={tab} setTab={setTab}>
              전체
            </TabButton>
            <TabButton index={1} tab={tab} setTab={setTab}>
              회원정보
            </TabButton>
            <TabButton index={2} tab={tab} setTab={setTab}>
              동화제작
            </TabButton>
            <TabButton index={3} tab={tab} setTab={setTab}>
              기타문의
            </TabButton>
          </div>
          <List
            className="flex flex-col gap-[15px] mx-auto items-start w-full max-w-[1180px]"
            orientation="vertical"
          >
            {FAQList.map((props, index) => (
              <React.Fragment key={`CustomerServiceFaqrow${index}`}>
                <CustomerServiceFaqrow
                  className="flex flex-col items-center justify-start my-0 
                              border-b-[1px] border-b-gray-500 py-5 w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
        </div>
        <Paging
          className="my-2"
          currentPage={currentPage}
          maxPage={10}
          setCurrentPage={setCurrentPage}
        />
        <Button
          className="cursor-pointer my-4 rounded-[10px] text-[22px] text-center
                    sm:text-lg md:text-xl md:w-full tracking-[-0.42px] w-[564px]"
          color="amber_A100"
          size="xl"
          variant="fill"
        >
          1:1 문의 하기
        </Button>
      </Layout>
    </>
  );
};

export default CustomerServicePage;
