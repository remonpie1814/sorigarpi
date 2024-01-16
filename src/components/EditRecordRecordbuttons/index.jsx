import React from "react";

import { Button, Img, Text } from "components";

const EditRecordRecordbuttons = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center py-[7px] w-full">
          <div className="flex md:flex-col flex-row gap-2.5 h-[136px] md:h-auto items-center justify-center py-7 w-auto">
            <Button
              className="!text-gray-900 cursor-pointer font-inter font-medium h-20 rounded-[20px] text-[22px] text-center sm:text-lg md:text-xl w-[140px]"
              color="gray_300"
              variant="fill"
            >
              {props?.cancelbutton}
            </Button>
            <div className="bg-amber-A100 flex flex-row gap-2.5 h-20 md:h-auto items-center justify-center sm:px-5 px-[30px] py-2.5 rounded-[20px] w-[600px] md:w-full">
              <Img
                className="h-[61px] md:h-auto object-cover w-[61px]"
                src="images/img_image889.png"
                alt="image889"
              />
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                size="txtInterMedium22Gray900_1"
              >
                {props?.savesoundeffecttext}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 h-[791px] md:h-auto items-center justify-center w-full">
          <div className="bg-gray-200_02 flex flex-col gap-5 h-full items-center justify-start p-5 w-full">
            <div className="flex flex-row gap-[59px] h-[75px] md:h-auto items-end justify-center w-auto">
              <div className="flex flex-col h-[60px] items-center justify-start p-[9px] w-[60px]">
                <Img
                  className="h-[37px] md:h-auto object-cover w-[96%]"
                  src="images/img_image936_37x40.png"
                  alt="image936"
                />
              </div>
              <Img
                className="h-[60px] w-[60px]"
                src="images/img_overflowmenu.svg"
                alt="overflowmenu"
              />
              <div className="flex flex-col h-[60px] items-center justify-start p-[9px] w-[60px]">
                <Img
                  className="h-10 md:h-auto object-cover w-10"
                  src="images/img_image937.png"
                  alt="image937"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 h-20 md:h-auto items-center justify-start py-2.5 w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[15%] md:w-full">
                  <Img
                    className="h-9 md:h-auto object-cover w-9"
                    src="images/img_image900.png"
                    alt="image900"
                  />
                </div>
                <div className="flex flex-col items-center justify-end p-[3px]">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 tracking-[-0.53px]"
                    size="txtInterMedium28Gray900_1"
                  >
                    {props?.timetext}
                  </Text>
                </div>
                <div className="flex flex-row gap-[45px] items-center justify-center w-auto">
                  <Img
                    className="h-[42px] md:h-auto object-cover w-[42px]"
                    src="images/img_image866.png"
                    alt="image866"
                  />
                  <Img
                    className="h-[39px] md:h-auto object-cover w-[39px]"
                    src="images/img_image865.png"
                    alt="image865"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start px-2 w-full">
                <Img
                  className="h-[94px] md:h-auto object-cover rounded w-full"
                  src="images/img_image883.png"
                  alt="image883"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[118px] sm:h-auto object-cover w-[1059px] md:w-full"
                  src="images/img_image935.png"
                  alt="image935"
                />
              </div>
            </div>
          </div>
          <div className="bg-orange-50_01 flex flex-col items-center justify-end p-[13px] w-full">
            <Img
              className="h-[279px] md:h-auto object-cover w-[29%]"
              src="images/img_image934.png"
              alt="image934"
            />
          </div>
        </div>
      </div>
    </>
  );
};

EditRecordRecordbuttons.defaultProps = {
  cancelbutton: "취소",
  savesoundeffecttext: "효과음 저장",
  timetext: "3:11 / 3:30",
};

export default EditRecordRecordbuttons;
