import React from "react";

import { Button, Text } from "components";

const Modal = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-end p-[105px] md:px-10 sm:px-5 w-full">
          <Text
            className="mt-0.5 text-[22px] text-black-900 text-center sm:text-lg md:text-xl"
            size="txtInterMedium22Black900_1"
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

Modal.defaultProps = {
  confirmationtext: "삭제하시겠습니까?",
  cancelbuttontext: "취소",
  confirmbuttontext: "확인",
};

export default Modal;
