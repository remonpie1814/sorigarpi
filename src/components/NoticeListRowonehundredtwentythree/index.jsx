import React from "react";

import { Text } from "components";

const NoticeListRowonehundredtwentythree = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px] w-auto"
          size="txtInterMedium22Black900_1"
        >
          {props?.textone}
        </Text>
        <Text
          className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px] w-auto"
          size="txtInterMedium22Black900_1"
        >
          {props?.texttwo}
        </Text>
        <Text
          className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px] w-[119px]"
          size="txtInterMedium22Black900_1"
        >
          {props?.textthree}
        </Text>
      </div>
    </>
  );
};

NoticeListRowonehundredtwentythree.defaultProps = {
  textone: "123",
  texttwo: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ...",
  textthree: "2023. 07. 11",
};

export default NoticeListRowonehundredtwentythree;
