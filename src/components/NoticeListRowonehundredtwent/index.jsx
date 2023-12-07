import React from "react";

import { Text } from "components";

const NoticeListRowonehundredtwent = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px] w-auto"
          size="txtInterMedium22Black900_1"
        >
          {props?.username}
        </Text>
        <Text
          className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px] w-auto"
          size="txtInterMedium22Black900_1"
        >
          {props?.userdescription}
        </Text>
        <Text
          className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px] w-[119px]"
          size="txtInterMedium22Black900_1"
        >
          {props?.userdate}
        </Text>
      </div>
    </>
  );
};

NoticeListRowonehundredtwent.defaultProps = {
  username: "123",
  userdescription: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ...",
  userdate: "2023. 07. 11",
};

export default NoticeListRowonehundredtwent;
