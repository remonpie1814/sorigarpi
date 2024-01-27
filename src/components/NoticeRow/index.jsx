import React from "react";

import { Text } from "components";

const NoticeRow = ({ className, category, title, creDate }) => {
  return (
    <>
      <div
        className={`border-b border-black-900_a5 border-solid 
        flex flex-row md:flex-col items-center justify-start md:gap-10 gap-[20px]
        h-[46px] md:h-auto w-full md:w-full py-[9px] ${className}`}
      >
        <div className="flex flex-row flex-grow items-center justify-center gap-10">
          <Text
            className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px] w-auto"
            size="txtInterMedium22Black900_1"
          >
            {category}
          </Text>
          <Text
            className="flex flex-grow text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px] w-auto"
            size="txtInterMedium22Black900_1"
          >
            {title}
          </Text>
        </div>
        <Text
          className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px]"
          size="txtInterMedium22Black900_1"
        >
          {creDate}
        </Text>
      </div>
    </>
  );
};

NoticeRow.defaultProps = {
  category: "123",
  title: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ...",
  creDate: "2023. 07. 11",
};

export default NoticeRow;
