import React from "react";

import { Img, Text } from "components";

const CustomerServiceFaqrow = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[455px] items-center justify-between w-auto">
          <div className="flex flex-row gap-2.5 items-center justify-start w-auto md:w-full">
            <Text
              className="text-base text-black-900 text-center tracking-[-0.30px] w-[67px]"
              size="txtInterMedium16Black900"
            >
              {props?.userinfotext}
            </Text>
            <Text
              className="text-base text-black-900 tracking-[-0.30px] w-[127px]"
              size="txtInterMedium16Black900"
            >
              {props?.userinfosubtext}
            </Text>
          </div>
          <Img
            className="h-8 md:h-auto object-cover w-8"
            src="images/img_down11_32x32.png"
            alt="downeleven"
          />
        </div>
      </div>
    </>
  );
};

CustomerServiceFaqrow.defaultProps = {
  userinfotext: "[회원정보]",
  userinfosubtext: "탈퇴를 하고 싶어요.",
};

export default CustomerServiceFaqrow;
