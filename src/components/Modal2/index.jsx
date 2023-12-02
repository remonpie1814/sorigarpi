import React from "react";

import { Button, Img, Text } from "components";

const Modal2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-5 h-full items-center justify-start py-[33px] w-full">
          <Img
            className="h-[87px] md:h-auto object-cover w-[165px] sm:w-full"
            alt="image936"
            src={props?.image936}
          />
          <Text
            className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl w-auto"
            size="txtInterMedium22Black900"
          >
            {props?.confirmationtext}
          </Text>
        </div>
        <div className="flex sm:flex-col flex-row sm:gap-10 h-[59px] md:h-auto items-start justify-between w-full">
          <Button
            className="cursor-pointer font-inter font-medium min-w-[300px] text-[22px] text-center sm:text-lg md:text-xl"
            shape="square"
            color="blue_gray_100"
            size="lg"
            variant="fill"
          >
            {props?.cancelbuttontext}
          </Button>
          <Button
            className="cursor-pointer font-inter font-medium min-w-[300px] text-[22px] text-center sm:text-lg md:text-xl"
            shape="square"
            color="amber_A100"
            size="lg"
            variant="fill"
          >
            {props?.confirmbuttontext}
          </Button>
        </div>
      </div>
    </>
  );
};

Modal2.defaultProps = {
  image936: "images/img_image936.png",
  confirmationtext: "효과음을 삭제하시겠습니까?",
  cancelbuttontext: "취소",
  confirmbuttontext: "확인",
};

export default Modal2;
