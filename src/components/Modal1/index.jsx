import React from "react";

import { Button, Text } from "components";

const Modal1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-end p-[105px] md:px-10 sm:px-5 w-full">
          <Text
            className="mt-0.5 text-[22px] text-black-900 text-center sm:text-lg md:text-xl"
            size="txtInterMedium22Black900"
          >
            {props?.fourhundredfiftyeight}
          </Text>
        </div>
        <div className="flex flex-col h-[59px] md:h-auto items-start justify-between w-full">
          <Button
            className="cursor-pointer font-inter font-medium min-w-[600px] md:min-w-full text-[22px] text-center sm:text-lg md:text-xl"
            shape="square"
            color="blue_gray_100"
            size="lg"
            variant="fill"
          >
            {props?.closebuttontext}
          </Button>
        </div>
      </div>
    </>
  );
};

Modal1.defaultProps = {
  fourhundredfiftyeight: "삭제되었습니다",
  closebuttontext: "닫기",
};

export default Modal1;
