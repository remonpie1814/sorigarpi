import React from "react";

import { Button, Img, Text } from "components";

const Row1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
          <Img
            className="h-[30px] w-[260px]"
            src="images/img__black_900_30x260.svg"
            alt="fourhundredfort"
          />
          <div className="flex flex-1 flex-col items-center justify-center w-full">
            <Text
              className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.24px] w-auto"
              size="txtInterMedium22Black900_1"
            >
              {props?.fourhundredfortOne}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-end px-2.5 w-[260px]">
            <Button
              className="!text-black-900 cursor-pointer font-inter font-medium min-w-[150px] text-[22px] text-center sm:text-lg md:text-xl"
              shape="square"
              color="blue_gray_100_02"
              size="xs"
              variant="fill"
            >
              {props?.savebuttontext}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

Row1.defaultProps = {
  fourhundredfortOne: "신데렐라는 어려서",
  savebuttontext: "저장하기",
};

export default Row1;
