import React, { useState } from "react";
import { Text, Img, MainAlertInfo } from "components";

const MainAlert = ({ onClose }) => {
  const [alertList, setAlertList] = useState([
    {
      content: "토끼와 호랑이 동화가 [욕설]로 신고되어 비공개처리 되었습니다.",
      creDate: "23.11.02 18:30",
      read: "yes",
      clickLink: "/LikedTale",
    },
    {
      content: "토끼와 호랑이 동화가 [욕설]로 신고되어 비공개처리 되었습니다.",
      creDate: "23.11.02 18:30",
      read: "no",
      clickLink: "link",
    },
    {
      content: "토끼와 호랑이 동화가 [욕설]로 신고되어 비공개처리 되었습니다.",
      creDate: "23.11.02 18:30",
      read: "no",
      clickLink: "link",
    },
    {
      content: "토끼와 호랑이 동화가 [욕설]로 신고되어 비공개처리 되었습니다.",
      creDate: "23.11.02 18:30",
      read: "no",
      clickLink: "link",
    },
    {
      content: "토끼와 호랑이 동화가 [욕설]로 신고되어 비공개처리 되었습니다.",
      creDate: "23.11.02 18:30",
      read: "yes",
      clickLink: "/LikedTale",
    },
    {
      content: "토끼와 호랑이 동화가 [욕설]로 신고되어 비공개처리 되었습니다.",
      creDate: "23.11.02 18:30",
      read: "no",
      clickLink: "link",
    },
    {
      content: "토끼와 호랑이 동화가 [욕설]로 신고되어 비공개처리 되었습니다.",
      creDate: "23.11.02 18:30",
      read: "no",
      clickLink: "link",
    },
    {
      content: "토끼와 호랑이 동화가 [욕설]로 신고되어 비공개처리 되었습니다.",
      creDate: "23.11.02 18:30",
      read: "no",
      clickLink: "link",
    },
    {
      content: "토끼와 호랑이 동화가 [욕설]로 신고되어 비공개처리 되었습니다.",
      creDate: "23.11.02 18:30",
      read: "yes",
      clickLink: "/LikedTale",
    },
    {
      content: "토끼와 호랑이 동화가 [욕설]로 신고되어 비공개처리 되었습니다.",
      creDate: "23.11.02 18:30",
      read: "no",
      clickLink: "link",
    },
    {
      content: "토끼와 호랑이 동화가 [욕설]로 신고되어 비공개처리 되었습니다.",
      creDate: "23.11.02 18:30",
      read: "no",
      clickLink: "link",
    },
    {
      content: "토끼와 호랑이 동화가 [욕설]로 신고되어 비공개처리 되었습니다.",
      creDate: "23.11.02 18:30",
      read: "no",
      clickLink: "link",
    },
    {
      content: "토끼와 호랑이 동화가 [욕설]로 신고되어 비공개처리 되었습니다.",
      creDate: "23.11.02 18:30",
      read: "yes",
      clickLink: "/LikedTale",
    },
    {
      content: "토끼와 호랑이 동화가 [욕설]로 신고되어 비공개처리 되었습니다.",
      creDate: "23.11.02 18:30",
      read: "no",
      clickLink: "link",
    },
    {
      content: "토끼와 호랑이 동화가 [욕설]로 신고되어 비공개처리 되었습니다.",
      creDate: "23.11.02 18:30",
      read: "no",
      clickLink: "link",
    },
    {
      content: "토끼와 호랑이 동화가 [욕설]로 신고되어 비공개처리 되었습니다.",
      creDate: "23.11.02 18:30",
      read: "no",
      clickLink: "link",
    },
  ]);

  return (
    <>
      <div className="bg-white-A700 absolute top-1 right-[116px] z-10 flex w-[380px] shadow-[0_7px_29px_0px_rgba(100,100,111,0.4)] rounded-md	flex flex-col md:fixed md:top-0 md:left-0 md:w-full md:h-full">
        <div className="flex flex-col w-full h-[100px] p-4 bg-amber-A100 rounded-t-md	">
          <div className="flex flex-row items-center justify-between pb-2">
            <Text className="text-[22px]" size="txtInterBold22">
              알림
            </Text>
            <Img
              className="w-[16px] h-[16px] text-right cursor-pointer"
              src="/images/close.png"
              onClick={() => {
                onClose();
              }}
            />
          </div>
          <div>
            <Text className="text-m" size="txtInterMedium16Black900_1">
              안 읽은 알림({alertList.length})
            </Text>
          </div>
        </div>
        {alertList.length == 0 ? (
          <div className="flex flex-col items-center gap-2 p-6">
            <Img src="/images/emptybell.png" />
            <Text
              className="w-full text-center text-m "
              size="txtInterBold16Black900"
            >
              새로운 알림이 없습니다.
            </Text>
          </div>
        ) : (
          <div className="flex flex-col max-h-[600px] overflow-auto	sm:max-h-full">
            {alertList.map((alert, index) => {
              return (
                <MainAlertInfo
                  {...alert}
                  className={
                    "flex flex-col gap-1 p-4" +
                    (alertList.length - 1 === index ? "" : " border-b")
                  }
                  textClassName={
                    "text-sm" +
                    (alert.read == "yes" ? " text-blue_gray-100_01" : "")
                  }
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export { MainAlert };
