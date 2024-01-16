import React from "react";

import { Img, Text } from "components";

const AccountInformationColumnonehundredfiftysix = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[27px] h-[38px] md:h-auto items-start justify-start w-[191px]">
          <Img
            className="h-[35px] md:h-auto object-cover w-[35px]"
            src="images/img_image839.png"
            alt="image839"
          />
          <Text
            className="text-base text-black-900 tracking-[-0.30px] w-[89px]"
            size="txtInterMedium16Black900_1"
          >
            {props?.accountdeletiontext}
          </Text>
        </div>
      </div>
    </>
  );
};

AccountInformationColumnonehundredfiftysix.defaultProps = {
  accountdeletiontext: "계정 탈퇴하기",
};

export default AccountInformationColumnonehundredfiftysix;
