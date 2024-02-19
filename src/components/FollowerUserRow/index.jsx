import React, { useState } from "react";
// 우주 수정 중

import { Button, Img, Text } from "components";

const FollowerUserRow = ({
  className,
  id,
  name,
  profileImg,
  isAlert,
  deleteFollow,
}) => {
  const [currentAlert, setCurrentAlert] = useState(isAlert);
  function handleAlert(id, currentAlert) {
    const msg = currentAlert
      ? name + "의 알람을 해제하시겠습니까?"
      : name + "의 알람을 받을까요?";
    let result = window.confirm(msg);
    if (result) {
      requestChangeAlert(id, currentAlert);
      setCurrentAlert(!currentAlert);
    }
  }
  // todo: 알림 상태 바꾸는 함수
  function requestChangeAlert(id, isAlert) {
    console.log("알림 상태 바꾸기");
  }

  return (
    <>
      <div className={className}>
        <div className="flex flex-col h-[100px] items-center justify-start w-[100px]">
          <Img
            className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
            src={profileImg}
            alt="ellipseFour"
          />
        </div>
        <div className="flex flex-col flex-grow max-w-[100px] items-start justify-start pr-0.5 py-0.5">
          <Text
            className="text-base text-gray-900 tracking-[-0.30px]"
            size="txtInterMedium16"
          >
            {name}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center px-[9px] w-[7%] sm:w-full">
          <Img
            className="h-[23px] md:h-auto object-cover w-[23px] cursor-pointer"
            onClick={() => {
              handleAlert(id, currentAlert);
            }}
            src={`${
              currentAlert
                ? "/images/img__30x30.png"
                : "/images/no_alert_bell.png"
            }`}
            alt="bell"
          />
        </div>
        <div className="h-[103px] md:h-[35px] py-[34px] relative w-[17%] sm:w-full ">
          <Button
            className="absolute bg-amber-A100 
            h-[35px] inset-[0] justify-center m-auto rounded-[10px] 
            text-base text-black-900 text-center tracking-[-0.30px] w-full"
            onClick={deleteFollow}
            size="txtInterMedium16Black900"
          >
            삭제
          </Button>
        </div>
      </div>
    </>
  );
};

export default FollowerUserRow;
