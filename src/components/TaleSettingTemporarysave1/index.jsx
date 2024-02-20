import React, { useState } from "react";

import { Button, CheckBox, Text, RadioGroup, Radio } from "components";

const TaleSettingTemporarysave1 = (props) => {
  const [check, setCheck] = useState(false);

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
          <div className="flex flex-row items-center justify-start w-full gap-2">
            <CheckBox
              className="!text-black-900 font-inter font-medium text-base text-left tracking-[-0.30px]"
              inputClassName="h-[22px] mr-[5px] w-[22px]"
              name="FourHundredThirtyThree"
              id="FourHundredThirtyThree"
              label={props?.text1}
              shape="round"
              color="gray_600_01"
              size="xs"
              variant="outline"
              onChange={() => {
                check ? setCheck(false) : setCheck(true);
              }}
            ></CheckBox>
            <Text
              className="text-green-500_01 text-sm tracking-[-0.27px] w-auto"
              size="txtInterMedium14Green50001"
            >
              {props?.text2}
            </Text>
          </div>
          {check ? (
            <div className="flex flex-col gap-2 items-start justify-center sm:px-5 px-[30px] w-full">
              <div className="flex flex-col items-start justify-center w-full gap-2">
                <Text
                  className="text-base text-black-900 tracking-[-0.30px] w-[100%]"
                  size="txtInterMedium16Black900"
                >
                  {props?.text3}
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
              <div className="flex flex-col items-start justify-center w-full gap-2">
                <Text
                  className="text-base text-black-900 tracking-[-0.30px] w-[100%]"
                  size="txtInterMedium16Black900"
                >
                  {props?.text4}
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
          ) : null}
        </div>
        <div className="flex flex-col gap-2 items-start justify-center sm:px-5 px-[30px] w-full">
          <div className="flex flex-row items-center justify-start w-full gap-2">
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
              {props?.text5}
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
            {props?.text6}
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
  text3: "녹음이 저장된 동화입니다. 공개할까요?",
  text4: "내 동화에 다른 사람이 목소리를 녹음할 수 있도록 허용할까요?",
  text5: "나만 볼 수 있습니다.",
  text6: "완료",
};

export default TaleSettingTemporarysave1;
