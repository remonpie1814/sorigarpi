import React from "react";

import { Img, Text } from "components";

const FollowListFollowuserrow = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[100px] items-center justify-start w-[100px]">
          <Img
            className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
            src="images/img_ellipse4.png"
            alt="ellipseFour"
          />
        </div>
        <div className="flex flex-col items-start justify-start pr-0.5 py-0.5">
          <Text
            className="mb-[11px] text-base text-gray-900 tracking-[-0.30px]"
            size="txtInterMedium16"
          >
            {props?.followtext}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start px-[9px] w-[7%] sm:w-full">
          <Img
            className="h-[30px] md:h-auto object-cover w-[30px]"
            src="images/img__30x30.png"
            alt="FiftyOne"
          />
        </div>
        <div className="h-[103px] md:h-[35px] py-[34px] relative w-[17%] sm:w-full">
          <div className="absolute bg-amber-A100 h-[35px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
          <Text
            className="absolute h-max inset-[0] justify-center m-auto text-base text-black-900 text-center tracking-[-0.30px] w-max"
            size="txtInterMedium16Black900"
          >
            {props?.deletetext}
          </Text>
        </div>
      </div>
    </>
  );
};

FollowListFollowuserrow.defaultProps = {
  followtext: "팔로우1",
  deletetext: "삭제",
};

export default FollowListFollowuserrow;
