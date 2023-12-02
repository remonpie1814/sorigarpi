import React from "react";

import { Img, Text } from "components";

const AccountInformationColumncommenteleven = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[27px] h-[38px] md:h-auto items-start justify-start w-[191px]">
          <Img
            className="h-[35px] md:h-auto object-cover w-[35px]"
            src="images/img_comment11.png"
            alt="commentEleven"
          />
          <Text
            className="text-base text-black-900 tracking-[-0.30px] w-20"
            size="txtInterMedium16Black900_1"
          >
            {props?.type}
          </Text>
        </div>
      </div>
    </>
  );
};

AccountInformationColumncommenteleven.defaultProps = { type: "내가 쓴 댓글" };

export default AccountInformationColumncommenteleven;
