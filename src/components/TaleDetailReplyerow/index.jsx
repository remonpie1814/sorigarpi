import React, { useState } from "react";

import { AutoResizingTextarea, Button, Img, Text } from "components";

const TaleDetailReplyerow = ({
  className,
  profileImage,
  commenter,
  content,
  creDate,
}) => {
  const [isOpen, setOpen] = useState(false);

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
        <Button
          className="text-base text-gray-900 tracking-[-0.18px]
                    text-left w-1/6 sm:w-full"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          답글
        </Button>
        {isOpen && (
          <form className="w-full pb-2">
            <AutoResizingTextarea className="gap-2" placeholder="답글 입력...">
              <Button className="border-2 px-2 bg-gray-400 rounded-md">
                작성
              </Button>
            </AutoResizingTextarea>
          </form>
        )}
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
