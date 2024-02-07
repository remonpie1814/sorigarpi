import React from "react";

import { Button, Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const Sidebar1 = ({ className, onClose }) => {
  const buttonsList = [
    {
      image: "images/img_image505.png",
      text: "내 프로필",
      navigateTo: "/Profile",
    },
    {
      image: "images/img_image505_50x50.png",
      text: "좋아요 누른 동화",
      navigateTo: "/LikedTale",
    },
    {
      image: "images/img_image505_1.png",
      text: "최근 본 동화",
      navigateTo: "/RecentView",
    },
    {
      image: "images/img_image505_2.png",
      text: "팔로우한 작가의 동화",
      navigateTo: "/FollowingTale",
    },
    {
      image: "images/img_image505_3.png",
      text: "1:1 문의 내역",
      navigateTo: "/InquiryHistory",
    },
    {
      image: "images/img_image505_4.png",
      text: "공지사항",
      navigateTo: "/NoticeList",
    },
    {
      image: "images/img_image505_5.png",
      text: "고객센터",
      navigateTo: "/CustomerService",
    },
    {
      image: "images/img_image505_6.png",
      text: "계정정보",
      navigateTo: "/AccountInformation",
    },
  ];

  return (
    <>
      <div className={className}>
        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
          <Text
            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px]"
            size="txtInterMedium24Gray900_1"
          >
            사용자님 환영합니다
          </Text>
          <div className="flex flex-col h-20 items-center justify-end p-6 sm:px-5 w-20">
            <Text
              className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[-0.46px]"
              size="txtInterMedium24Black900"
              onClick={() => {
                onClose();
              }}
            >
              X
            </Text>
          </div>
        </div>

        {buttonsList.map((item, index) => {
          return (
            <>
              <SidebarRow {...item} />
              <hr className="w-full border-[1px] border-gray-500" />
            </>
          );
        })}

        <div className="flex flex-col flex-grow items-center justify-end w-full">
          <Button
            className="cursor-pointer 
            font-inter font-medium
            w-full py-2
            text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px]"
            shape="square"
            color="blue_gray_100"
            variant="fill"
          >
            로그아웃
          </Button>
        </div>
      </div>
    </>
  );
};

const SidebarRow = ({ text, image, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-row gap-[30px] h-20 md:h-auto items-center justify-start py-2.5 w-full"
      onClick={() => {
        navigate(navigateTo);
      }}
    >
      <Text
        className="text-xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px] w-auto"
        size="txtInterMedium24Gray900_1"
      >
        {text}
      </Text>
      <Img
        className="h-[50px] md:h-auto object-cover w-[50px]"
        src={image}
        alt="image505"
      />
    </div>
  );
};

export default Sidebar1;
