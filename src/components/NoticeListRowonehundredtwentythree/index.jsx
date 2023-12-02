import React from "react";

import { Text } from "components";

const NoticeListRowonehundredtwentythree = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px] w-auto"
          size="txtInterMedium22Black900"
        >
          {props?.userid}
        </Text>
        <Text
          className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px] w-auto"
          size="txtInterMedium22Black900"
        >
          {props?.username}
        </Text>
        <Text
          className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px] w-[119px]"
          size="txtInterMedium22Black900"
        >
          {props?.userdate}
        </Text>
      </div>
    </>
  );
};

NoticeListRowonehundredtwentythree.defaultProps = {
  userid: "123",
  username: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ...",
  userdate: "2023. 07. 11",
};

export default NoticeListRowonehundredtwentythree;
