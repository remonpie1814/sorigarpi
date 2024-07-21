import React, { useState, useEffect } from "react";

import {
  Img,
  Layout,
  Button,
  CheckBox,
  Text,
  RadioGroup,
  Radio,
} from "components";
import { createBook } from "utils/DataService";

const TaleSettingPage = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const saveRecord = true; //DB에서 가져올 값
  const [recordPublic, setRecordPublic] = useState(false);
  const [allowRecord, setAllowRecord] = useState(false);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const handleCreateBook = () => {
    console.log(selectedOption);
    const bookDTO = {
      bookName: title,
      info: description,
    };
    if (selectedOption.toString() === "temp") {
      bookDTO.status = "임시저장";
      bookDTO.recordable = "no";
    } else if (selectedOption.toString() === "private") {
      bookDTO.status = "비공개";
      bookDTO.recordable = "no";
    } else {
      bookDTO.status = "공개";
      bookDTO.recordable = allowRecord ? "yes" : "no";
    }
    createBook(bookDTO);
  };
  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);
  return (
    <>
      <Layout>
        <div className="flex flex-col md:gap-10 gap-[65px] object-contain md:h-auto items-center justify-start max-w-[1180px] mx-auto pt-[30px] pb-[200px] md:pb-[30px] md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full gap-5 px-5 pb-5">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.53px] w-full"
                size="txtInterMedium28Gray900"
              >
                동화 설정하기
              </Text>
            </div>
            <div className="flex flex-row items-start justify-start w-full md:flex-col md:gap-5">
              <Img
                className="h-[426px] sm:h-auto max-h-[426px] object-cover sm:w-[] md:m-auto"
                src="images/img_fairytaleimage.png"
                alt="fairytaleimage"
              />
              <div className="flex flex-1 flex-col gap-8 h-[436px] md:h-auto items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-center w-full h-[25%]">
                  <Text
                    className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
                    size="txtInterMedium22Black900_1"
                  >
                    제목
                  </Text>
                  <textarea
                    className="bg-gray-100_01 h-[100%] w-[78%] md:w-[90%] sm:w-[100%] resize-none	"
                    placeholder="동화 제목을 적어주세요"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  ></textarea>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-center w-full h-[60%]">
                  <Text
                    className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
                    size="txtInterMedium22Black900_1"
                  >
                    설명
                  </Text>
                  <textarea
                    className="bg-gray-100_01 h-[100%] w-[78%] md:w-[90%] sm:w-[100%] resize-none"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="동화에 대한 설명을 적어주세요"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-start max-w-[1180px] w-full">
            <RadioGroup>
              <Radio
                className={`flex flex-row w-full p-4 cursor-pointer border-[1px] rounded-t border-b-0
            ${selectedOption === "1" ? "bg-[#fffff2] border-amber-400" : null}`}
                inputClassName="text-amber-400 mt-1 mr-2"
                comment="모든 사람이 볼 수 있습니다."
                commentClassName="text-green-500_01 text-sm tracking-[-0.27px] w-auto"
                id="public"
                name="save"
                value="출판하기"
                onchange={setSelectedOption}
              >
                {selectedOption === "public" ? (
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
                        내 동화에 다른 사람이 목소리를 녹음할 수 있도록
                        허용할까요?
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
            ${
              selectedOption === "private"
                ? "bg-[#fffff2] border-amber-400"
                : null
            }`}
                inputClassName="text-amber-400 mt-1 mr-2"
                comment="나만 볼 수 있습니다."
                commentClassName="text-green-500_01 text-sm tracking-[-0.27px] w-auto"
                id="private"
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
                id="temp"
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
                출판 후에는 수정이 불가능합니다.
              </Text>
            )}

            <div className="flex flex-col h-[100px] md:h-auto items-center justify-start py-3 w-full">
              <Button
                onClick={handleCreateBook}
                className="cursor-pointer font-inter font-medium h-[60px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.24px] w-60"
                shape="round"
                color="yellow_200"
                size="xl"
                variant="fill"
              >
                출판하기
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TaleSettingPage;
