import React, { useState } from "react";

import { Button, CheckBox, Text, RadioGroup, Radio } from "components";

const TaleSettingTemporarysave1 = (props) => {
  const [check, setCheck] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const saveRecord = true; //DB에서 가져올 값
  const [recordPublic, setRecordPublic] = useState(false);
  const [allowRecord, setAllowRecord] = useState(false);
  return (
    <>
      <div className={props.className}>
        <RadioGroup>
          <Radio
            className={`flex flex-row w-full p-4 cursor-pointer border-[1px] rounded-t border-b-0
            ${selectedOption === "1" ? "bg-[#fffff2] border-amber-400" : null}`}
            inputClassName="text-amber-400 mt-1 mr-2"
            comment="모든 사람이 볼 수 있습니다."
            commentClassName="text-green-500_01 text-sm tracking-[-0.27px] w-auto"
            id="1"
            name="save"
            value="출판하기"
            onchange={setSelectedOption}
          >
            {selectedOption === "1" ? (
              <div>
                {saveRecord ? (
                  <span className="p-1">
                    <Text
                      className="text-sm tracking-[-0.27px] w-auto"
                      size="txtInterMedium14Deeporange600"
                    >
                      녹음이 저장된 동화입니다. 공개할까요?
                    </Text>
                    <CheckBox
                      className="font-inter font-medium text-sm text-left tracking-[-0.30px]"
                      inputClassName="h-[18px] mr-[5px] w-[18px] text-amber-400"
                      name="recordPublic"
                      id="recordPublic"
                      label="녹음 공개하기"
                      shape="round"
                      color="gray_600_01"
                      size="xs"
                      onChange={() => {
                        setRecordPublic(!recordPublic);
                      }}
                    ></CheckBox>
                  </span>
                ) : null}
                <span className="p-1">
                  <Text
                    className="text-sm tracking-[-0.27px] w-auto"
                    size="txtInterMedium14Deeporange600"
                  >
                    내 동화에 다른 사람이 목소리를 녹음할 수 있도록 허용할까요?
                  </Text>
                  <CheckBox
                    className="font-inter font-medium text-sm text-left tracking-[-0.30px]"
                    inputClassName="h-[18px] mr-[5px] w-[18px] text-amber-400"
                    name="allowRecord"
                    id="allowRecord"
                    label="다른 사람 녹음 허용하기"
                    shape="round"
                    color="gray_600_01"
                    size="xs"
                    onChange={() => {
                      setAllowRecord(!allowRecord);
                    }}
                  ></CheckBox>
                </span>
              </div>
            ) : null}
          </Radio>
          <hr
            className={`${
              selectedOption === "1" || selectedOption === "2"
                ? "border-amber-400"
                : null
            }`}
          />
          <Radio
            className={`flex flex-row w-full p-4 cursor-pointer border-[1px] border-y-0
            ${selectedOption === "2" ? "bg-[#fffff2] border-amber-400" : null}`}
            inputClassName="text-amber-400 mt-1 mr-2"
            comment="나만 볼 수 있습니다."
            commentClassName="text-green-500_01 text-sm tracking-[-0.27px] w-auto"
            id="2"
            name="save"
            value="비공개로출판하기"
            onchange={setSelectedOption}
          ></Radio>
          <hr
            className={`${
              selectedOption === "2" || selectedOption === "3"
                ? "border-amber-400"
                : null
            }`}
          />
          <Radio
            className={`flex flex-row w-full p-4 cursor-pointer border-[1px] rounded-b border-t-0
            ${selectedOption === "3" ? "bg-[#fffff2] border-amber-400" : null}`}
            inputClassName="text-amber-400 mt-1 mr-2"
            id="3"
            name="save"
            value="임시저장하기"
            onchange={setSelectedOption}
          ></Radio>
        </RadioGroup>
        {selectedOption === "3" ? null : (
          <Text
            className="text-base text-black-900 tracking-[-0.30px] w-auto pt-5"
            size="txtInterBold16Black900"
          >
            {props?.text}
          </Text>
        )}

        <div className="flex flex-col h-[100px] md:h-auto items-center justify-start py-3 w-full">
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
