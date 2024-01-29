import React from "react";

import { Text } from "components";

const MyReplyListMyreplyrow = ({ className, content, creDate, taleTitle }) => {
  return (
    <>
      <div
        className={`flex flex-col gap-[3px] items-start justify-start w-full ${className}`}
      >
        <Text
          className="text-base text-black-900 tracking-[-0.30px]"
          size="txtInterMedium16Black900"
        >
          {content}
        </Text>
        <Text
          className="text-black-900 text-xs tracking-[-0.23px]"
          size="txtInterMedium12Black900"
        >
          {creDate}
        </Text>
        <Text
          className="text-gray-500 text-xs tracking-[-0.23px]"
          size="txtInterMedium12Gray500"
        >
          {taleTitle}
        </Text>
      </div>
    </>
  );
};

MyReplyListMyreplyrow.defaultProps = {
  content: "ㅋㅋㅋㅋㅋㅋㅋㅋ아 웃기네",
  creDate: "2023.11.02 11:04",
  taleTitle: "토끼와 호랑이",
};

export default MyReplyListMyreplyrow;
