import React from "react";

import { Button, Text } from "components";

const SearchResultSearchresult = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="bg-white-A700 h-[42px] justify-center max-w-[1180px] md:max-w-full sm:pr-5 pr-[35px] py-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px] w-full"
          size="txtInterMedium28"
        >
          {props?.searchresulttext}
        </Text>
        <div className="border-b border-blue_gray-100_01 border-solid flex flex-row gap-[30px] h-11 md:h-auto items-start justify-start max-w-[1180px] w-full">
          <Button
            className="!text-black-900 cursor-pointer font-bold font-inter min-w-[90px] text-base text-center tracking-[-0.30px]"
            shape="square"
            color="amber_A100"
            size="md"
            variant="outline"
          >
            {props?.buttontext}
          </Button>
          <div className="flex flex-col items-start justify-start sm:px-5 px-[30px] py-2.5 w-auto">
            <Text
              className="text-base text-blue_gray-100_01 tracking-[-0.30px] w-auto"
              size="txtInterBold16Bluegray10001"
            >
              {props?.authortext}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start py-[120px] w-full">
          {props?.noresultstext}
        </div>
      </div>
    </>
  );
};

SearchResultSearchresult.defaultProps = {
  searchresulttext: "‘바보’ 검색 결과",
  buttontext: "동화",
  authortext: "글쓴이",
  noresultstext: (
    <Text
      className="leading-[150.00%] max-w-[1180px] md:max-w-full text-base text-black-900 text-center tracking-[-0.30px]"
      size="txtInterBold16Black900"
    >
      <span className="text-gray-900 font-inter font-medium">
        <>
          검색결과가 없습니다.
          <br />
        </>
      </span>
      <span className="text-gray-900 font-inter font-medium">
        다른 검색어를 입력해 주세요.
      </span>
    </Text>
  ),
};

export default SearchResultSearchresult;
