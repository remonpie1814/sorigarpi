import React from "react";

import { Button, Img, List, Text } from "components";
import CustomerServiceColumnOne from "components/CustomerServiceColumnOne";
import CustomerServiceFaqrow from "components/CustomerServiceFaqrow";
import FollowListNavbar from "components/FollowListNavbar";
import SearchResultHeader from "components/SearchResultHeader";

const CustomerServicePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[231px] w-full">
        <SearchResultHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <FollowListNavbar className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
        <div className="flex flex-col gap-10 items-end justify-start max-w-[1180px] mx-auto pt-[30px] md:px-5 w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.53px] w-[53px]"
            size="txtInterMedium28Gray900"
          >
            FAQ
          </Text>
          <CustomerServiceColumnOne className="flex flex-col gap-8 items-start justify-center max-w-[1180px] w-full" />
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
      </div>
    </>
  );
};

export default CustomerServicePage;
