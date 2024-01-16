import React from "react";

import { Button, CheckBox, Text } from "components";

const TaleSettingTemporarysave1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700_44 flex flex-col gap-2 items-start justify-center sm:px-5 px-[30px] w-full">
          <Text
            className="text-base text-black-900 tracking-[-0.30px] w-auto"
            size="txtInterBold16Black900"
          >
            {props?.text}
          </Text>
          <div className="h-6 relative w-full">
            <div className="absolute flex flex-row h-full inset-y-[0] items-center justify-evenly left-[0] my-auto w-[252px]">
              <div className="border-2 border-gray-600_01 border-solid h-[22px] rounded-[5px] w-[22px]"></div>
              <div className="flex flex-col items-center justify-start pl-2.5 w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtInterMedium16Black900"
                >
                  {props?.text1}
                </Text>
              </div>
            </div>
            <Text
              className="absolute h-max inset-y-[0] left-[10%] my-auto text-green-500 text-sm tracking-[-0.27px] w-auto"
              size="txtInterMedium14Green500"
            >
              {props?.text2}
            </Text>
          </div>
          <div className="flex flex-col gap-2 items-start justify-center sm:px-5 px-[30px] w-full">
            <div className="flex flex-col gap-2 items-start justify-center w-full">
              <Text
                className="text-base text-black-900 tracking-[-0.30px] w-[255px]"
                size="txtInterMedium16Black900"
              >
                {props?.fourhundredtwentynine}
              </Text>
              <CheckBox
                className="!text-black-900 font-inter font-medium text-base text-left tracking-[-0.30px]"
                inputClassName="h-[22px] mr-[5px] w-[22px]"
                name="FourHundredThirty"
                id="FourHundredThirty"
                label="녹음 공개하기"
                shape="round"
                color="gray_600_01"
                size="xs"
                variant="outline"
              ></CheckBox>
            </div>
            <div className="flex flex-col gap-2 items-start justify-center w-full">
              <Text
                className="text-base text-black-900 tracking-[-0.30px] w-[400px]"
                size="txtInterMedium16Black900"
              >
                {props?.fourhundredthirtyone}
              </Text>
              <CheckBox
                className="!text-black-900 font-inter font-medium text-base text-left tracking-[-0.30px]"
                inputClassName="h-[22px] mr-[5px] w-[22px]"
                name="FourHundredThirtyTwo"
                id="FourHundredThirtyTwo"
                label="다른 사람 녹음 허용하기"
                shape="round"
                color="gray_600_01"
                size="xs"
                variant="outline"
              ></CheckBox>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-center sm:px-5 px-[30px] w-full">
          <div className="flex flex-row gap-2 items-center justify-start w-full">
            <CheckBox
              className="!text-black-900 font-inter font-medium text-base text-left tracking-[-0.30px]"
              inputClassName="h-[22px] mr-[5px] w-[22px]"
              name="FourHundredThirtyThree"
              id="FourHundredThirtyThree"
              label="비공개로 출판하기"
              shape="round"
              color="gray_600_01"
              size="xs"
              variant="outline"
            ></CheckBox>
            <Text
              className="text-green-500_01 text-sm tracking-[-0.27px] w-auto"
              size="txtInterMedium14Green50001"
            >
              {props?.text3}
            </Text>
          </div>
          <CheckBox
            className="!text-black-900 font-inter font-medium text-base text-left tracking-[-0.30px]"
            inputClassName="h-[22px] mr-[5px] w-[22px]"
            name="FourHundredThirtyFive"
            id="FourHundredThirtyFive"
            label="임시저장하기"
            shape="round"
            color="gray_600_01"
            size="xs"
            variant="outline"
          ></CheckBox>
        </div>
        <div className="flex flex-col h-[100px] md:h-auto items-center justify-start py-5 w-full">
          <Button
            className="cursor-pointer font-inter font-medium h-[60px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.24px] w-60"
            shape="round"
            color="yellow_200"
            size="xl"
            variant="fill"
          >
            {props?.text4}
          </Button>
        </div>
      </div>
    </>
  );
};

TaleSettingTemporarysave1.defaultProps = {
  text: "출판 후에는 수정이 불가능합니다.",
  text1: "출판하기",
  text2: "모든 사람이 볼 수 있습니다.",
  fourhundredtwentynine: "녹음이 저장된 동화입니다. 공개할까요?",
  fourhundredthirtyone:
    "내 동화에 다른 사람이 목소리를 녹음할 수 있도록 허용할까요?",
  text3: "나만 볼 수 있습니다.",
  text4: "완료",
};

export default TaleSettingTemporarysave1;
