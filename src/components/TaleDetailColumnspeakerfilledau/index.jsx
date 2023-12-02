import React from "react";

import { Img, Text } from "components";

const TaleDetailColumnspeakerfilledau = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start w-full">
          <div className="h-[393px] relative w-[26%] md:w-full">
            <Img
              className="absolute h-[393px] inset-[0] justify-center m-auto object-cover rounded-[5px] w-full"
              src="images/img_image932.png"
              alt="image932"
            />
            <div className="absolute flex flex-col items-center justify-center p-5 right-[0] top-[0] w-20">
              <Img
                className="h-10 md:h-auto rounded-[50%] w-10"
                src="images/img_speakerfilledaudiotool.png"
                alt="speakerfilledau"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-1 h-full items-start justify-start w-full">
            <div className="flex md:flex-col flex-row gap-1 items-start justify-start w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.79px] w-auto"
                size="txtInterMedium36"
              >
                {props?.rabbittigertext}
              </Text>
              <div className="flex flex-1 flex-col h-[54px] md:h-auto items-center justify-start max-w-[644px] md:pl-10 sm:pl-5 pl-[620px] pt-3 w-full">
                <Text
                  className="rotate-[-90deg] text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.46px] w-1.5"
                  size="txtInterMedium24Gray900_1"
                >
                  {props?.ellipsistext}
                </Text>
              </div>
            </div>
            <Text
              className="text-base text-gray-400 tracking-[-0.18px] w-full"
              size="txtInterMedium16Gray400_1"
            >
              {props?.datetext}
            </Text>
            <div className="flex flex-row gap-2.5 items-center justify-start w-full">
              <Img
                className="h-[31px] md:h-auto object-cover w-[33px]"
                src="images/img_image804.png"
                alt="image804"
              />
              <Text
                className="text-base text-gray-600 underline w-auto"
                size="txtInterMedium16Gray600"
              >
                {props?.koreantext}
              </Text>
            </div>
            <div className="flex flex-row gap-5 items-center justify-start py-2.5 w-full">
              <div className="flex flex-row gap-2.5 h-[30px] md:h-auto items-center justify-center w-[75px]">
                <Img
                  className="h-[25px] md:h-auto object-cover w-[25px]"
                  src="images/img_image804_25x25.png"
                  alt="image804_One"
                />
                <Text
                  className="text-base text-center text-gray-900 tracking-[-0.18px]"
                  size="txtInterMedium16Gray900"
                >
                  {props?.twentythreetext}
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 h-8 md:h-auto items-center justify-center w-[75px]">
                <Img
                  className="h-8 md:h-auto object-cover w-8"
                  src="images/img_image805.png"
                  alt="image805"
                />
                <Text
                  className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                  size="txtInterMedium16"
                >
                  {props?.onetext}
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 h-[30px] md:h-auto items-center justify-center w-[75px]">
                <Img
                  className="h-[25px] md:h-auto object-cover w-[25px]"
                  src="images/img__25x25.png"
                  alt="Eight"
                />
                <Text
                  className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                  size="txtInterMedium16"
                >
                  {props?.fivetext}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[150.00%] max-w-[850px] md:max-w-full text-base text-gray-600 tracking-[-0.18px]"
              size="txtInterMedium16Gray600"
            >
              {props?.descriptiontext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

TaleDetailColumnspeakerfilledau.defaultProps = {
  rabbittigertext: "토끼와 호랑이",
  ellipsistext: "···",
  datetext: "작성일 2023.10.06",
  koreantext: <>가나다라마바사아자차카 &gt;</>,
  twentythreetext: "23",
  onetext: "1",
  fivetext: "5",
  descriptiontext:
    "책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명",
};

export default TaleDetailColumnspeakerfilledau;
