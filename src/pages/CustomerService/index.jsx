import React from "react";

import { Button, Img, Layout, List, Text } from "components";
import CustomerServiceFaqrow from "components/CustomerServiceFaqrow";

const CustomerServicePage = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col gap-10 items-end justify-start max-w-[1180px] mx-auto pt-[30px] md:px-5 w-full">
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
                  placeholder="작품명 검색"
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
            <Text
              className="text-base text-black-900 text-center tracking-[-0.30px] w-7"
              size="txtInterMedium16Black900"
            >
              전체
            </Text>
            <Button
              className="cursor-pointer font-bold min-w-[100px] text-base text-center tracking-[-0.30px]"
              shape="square"
              color="blue_gray_100_01"
              size="xs"
              variant="outline"
            >
              회원정보
            </Button>
            <Text
              className="text-base text-black-900 text-center tracking-[-0.30px] w-[62px]"
              size="txtInterMedium16Black900"
            >
              동화 제작
            </Text>
            <Text
              className="text-base text-black-900 text-center tracking-[-0.30px] w-14"
              size="txtInterMedium16Black900"
            >
              기타문의
            </Text>
          </div>
          <List
            className="flex flex-col gap-[15px] items-start w-auto"
            orientation="vertical"
          >
            {new Array(8).fill({}).map((props, index) => (
              <React.Fragment key={`CustomerServiceFaqrow${index}`}>
                <CustomerServiceFaqrow
                  className="flex flex-col gap-2.5 items-center justify-start max-w-[1160px] my-0 outline outline-gray-400 py-5 w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
        </div>
        <Button
          className="cursor-pointer mt-[71px] rounded-[10px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px] w-[564px]"
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
