import React from "react";

import { Text } from "components";

const MyReplyListMyreplyrow = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-base text-black-900 tracking-[-0.30px] w-[174px]"
          size="txtInterMedium16Black900"
        >
          {props?.textone}
        </Text>
        <Text
          className="text-black-900 text-xs tracking-[-0.23px] w-[91px]"
          size="txtInterMedium12Black900"
        >
          {props?.texttwo}
        </Text>
        <Text
          className="text-gray-500 text-xs tracking-[-0.23px] w-[67px]"
          size="txtInterMedium12Gray500"
        >
          {props?.textthree}
        </Text>
      </div>
    </>
  );
};

MyReplyListMyreplyrow.defaultProps = {
  textone: "ㅋㅋㅋㅋㅋㅋㅋㅋ아 웃기네",
  texttwo: "2023.11.02 11:04",
  textthree: "토끼와 호랑이",
};

export default MyReplyListMyreplyrow;
