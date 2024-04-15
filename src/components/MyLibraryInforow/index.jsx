import React from "react";

import { Text } from "components";

const MyLibraryInforow = (props) => {
  let scope = "";
  let type = "";
  switch (props?.categorytext) {
    case 0:
      scope = "모두";
      break;
    case 1:
      scope = "전체 공개";
      break;
    case 2:
      scope = "비공개";
      break;
  }
  switch (props?.privacytext) {
    case 0:
      type = "모두";
      break;
    case 1:
      type = "그림만";
      break;
    case 2:
      type = "녹음만";
      break;
  }

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-center w-auto">
          <Text
            className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px]"
            size="txtInterMedium22Gray900"
          >
            {props?.searchresulttext}
          </Text>
        </div>
        <div className="flex flex-row items-start justify-center w-auto gap-8">
          <div className="bg-orange-50 flex flex-row gap-[9px] items-center justify-end p-2.5 rounded-[5px]">
            <Text
              className="text-base text-black-900 tracking-[-0.18px]"
              size="txtInterMedium16Black900_1"
            >
              공개 범위 : {scope}
            </Text>
            {props?.categorytext === 0 ? null : (
              <Text
                className="text-base text-red-A700 tracking-[-0.18px] cursor-pointer"
                size="txtInterMedium16RedA700_1"
                onClick={() => {
                  props?.setScope(0);
                }}
              >
                {props?.closebutton}
              </Text>
            )}
          </div>
          <div className="bg-orange-50 flex flex-row gap-3.5 items-center justify-end p-2.5 rounded-[5px]">
            <Text
              className="text-base text-black-900 tracking-[-0.18px]"
              size="txtInterMedium16Black900_1"
            >
              분류 : {type}
            </Text>
            {props?.privacytext === 0 ? null : (
              <Text
                className="text-base text-red-A700 tracking-[-0.18px] cursor-pointer"
                size="txtInterMedium16RedA700_1"
                onClick={() => {
                  props?.setType(0);
                }}
              >
                {props?.closebutton1}
              </Text>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

MyLibraryInforow.defaultProps = {
  searchresulttext: "‘호랑이’에 대한 검색 결과",
  categorytext: "분류 : 그림만",
  closebutton: "X",
  privacytext: "공개범위 : 모두",
  closebutton1: "X",
};

export default MyLibraryInforow;
