import React from "react";

import { Button, Img, Text } from "components";

const MyLibraryRowrectangleten = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[180px] relative rounded-[30px] w-[28%] sm:w-full">
          <Img
            className="absolute h-[180px] inset-[0] justify-center m-auto object-cover rounded-[30px] w-full"
            src="images/img_rectangle10_180x140.png"
            alt="rectangleTen"
          />
          <Img
            className="absolute h-[26px] object-cover right-[8%] top-[6%] w-[26px]"
            src="images/img_speakerfilledaudiotool_26x26.png"
            alt="speakerfilledau"
          />
        </div>
        <div className="flex flex-col gap-0.5 h-[196px] md:h-auto items-start justify-center w-[360px]">
          <div className="flex flex-row gap-2.5 items-center justify-start w-[360px]">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.24px] w-auto"
              size="txtInterMedium22Gray900_1"
            >
              {props?.textone}
            </Text>
            <Img
              className="h-[18px] md:h-auto object-cover w-[18px]"
              src="images/img_seticon.png"
              alt="seticon"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-auto">
            <Text
              className="text-gray-900 text-sm w-auto"
              size="txtInterMedium14Gray900"
            >
              {props?.texttwo}
            </Text>
          </div>
          <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
            <Img
              className="h-[18px] md:h-auto object-cover w-[18px]"
              src="images/img_image922.png"
              alt="image922"
            />
            <Text
              className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
              size="txtInterMedium14Gray900_1"
            >
              {props?.textthree}
            </Text>
            <Img
              className="h-6 md:h-auto object-cover w-6"
              src="images/img_image921.png"
              alt="image921"
            />
            <Text
              className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
              size="txtInterMedium14Gray900_1"
            >
              {props?.textfour}
            </Text>
          </div>
          <div className="flex flex-row items-start justify-between pl-0.5 w-full">
            <div className="flex flex-col gap-0.5 items-start justify-start mb-[9px] w-auto">
              <Text
                className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
                size="txtInterMedium14Gray900_1"
              >
                {props?.textfive}
              </Text>
              <Text
                className="text-gray-900 text-xs tracking-[-0.13px] w-auto"
                size="txtInterMedium12"
              >
                {props?.textsix}
              </Text>
            </div>
            <div className="flex flex-row gap-2.5 items-start justify-start mt-[15px] w-auto">
              <Button
                className="!text-black-900 cursor-pointer font-inter font-medium min-w-[100px] text-center text-sm tracking-[-0.15px]"
                shape="square"
                color="gray_300"
                size="md"
                variant="fill"
              >
                {props?.copybutton}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter font-medium min-w-[100px] text-center text-sm tracking-[-0.15px]"
                shape="square"
                color="gray_300"
                size="md"
                variant="fill"
              >
                {props?.deletebutton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MyLibraryRowrectangleten.defaultProps = {
  textone: "신데렐라는 어려서 부모님을 잃고요",
  texttwo: "10p",
  textthree: "5",
  textfour: "5",
  textfive: "유미네",
  textsix: "2023. 10. 08",
  copybutton: "복사",
  deletebutton: "삭제",
};

export default MyLibraryRowrectangleten;
