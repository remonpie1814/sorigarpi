import React from "react";

import { Button, Img, Text } from "components";

const TaleDetailReplyerow = ({
  className,
  profileImage,
  commenter,
  content,
  creDate,
}) => {
  return (
    <>
      <div className={className}>
        <div className="flex flex-row gap-[9px] items-center justify-start w-full">
          <Img
            className="h-[45px] md:h-auto object-cover w-[45px]"
            src={profileImage}
            alt="Two"
          />
          <div className="flex flex-row flex-grow items-center">
            <Text
              className="text-base text-gray-900 tracking-[-0.30px] w-auto"
              size="txtInterBold16"
            >
              {commenter}
            </Text>
            <Button className="ml-auto">
              <Img
                className="h-5 md:h-auto object-cover w-5"
                src="images/img_menu1.png"
                alt="menuOne"
              />
            </Button>
          </div>
        </div>
        <Text
          className="text-base text-gray-900 tracking-[-0.30px] w-full"
          size="txtInterMedium16"
        >
          {content}
        </Text>
        <Text
          className="text-gray-400 text-sm tracking-[-0.15px] w-full"
          size="txtInterMedium14Gray400"
        >
          {creDate}
        </Text>
        <Text
          className="text-base text-gray-900 tracking-[-0.18px] w-full"
          size="txtInterMedium16"
        >
          답글
        </Text>
      </div>
    </>
  );
};

TaleDetailReplyerow.defaultProps = {
  commenter: "댓글 작성자",
  content: "댓글 내용",
  creDate: "댓글을 단 일시",
  profileImage: "images/img_2_45x45.png",
};

export default TaleDetailReplyerow;
