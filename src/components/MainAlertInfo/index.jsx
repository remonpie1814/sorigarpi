import React, { useState } from "react";
import { Text, Img } from "components";
import { useNavigate } from "react-router-dom";

const MainAlertInfo = ({
  content,
  creDate,
  read,
  clickLink,
  className,
  textClassName,
}) => {
  const navigate = useNavigate();
  return (
    <div className={className}>
      <div className="flex flex-row gap-5 ">
        <Text
          className={`cursor-pointer md:w-full ${textClassName}`}
          size="txtInterMedium14"
          onClick={() => {
            navigate(clickLink);
          }}
        >
          {content}
        </Text>
        <Img
          className="w-[14px] h-[14px] cursor-pointer"
          src="/images/close.png"
          onClick={() => {
            // 알림 삭제하는 코드 작성
          }}
        />
      </div>
      <Text className={textClassName} size="txtInterMedium14">
        {creDate}
      </Text>
    </div>
  );
};
export { MainAlertInfo };
