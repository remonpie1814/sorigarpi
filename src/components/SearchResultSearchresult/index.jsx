import { React, useState } from "react";

import { Button, Text, TabButton } from "components";

const SearchResultSearchresult = (props) => {
  const [tab, setTab] = useState(0);
  return (
    <>
      <div className={props.className}>
        <Text
          className="bg-white-A700 h-[42px] justify-center max-w-[1180px] w-full md:max-w-full sm:pr-5 pr-[35px] py-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px] w-full"
          size="txtInterMedium28"
        >
          {props?.searchresulttext}
        </Text>
        <div className="flex flex-row items-start justify-start w-full gap-20 border-b border-gray-300 border-solid sm:gap-10">
          <TabButton
            index={0}
            tab={tab}
            setTab={setTab}
            border={"border-amber-A100 border-b-[5px] border-solid"}
          >
            동화
          </TabButton>
          <TabButton
            index={1}
            tab={tab}
            setTab={setTab}
            border={"border-amber-A100 border-b-[5px] border-solid"}
          >
            글쓴이
          </TabButton>
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
      <span className="font-medium text-gray-900 font-inter">
        <>
          검색결과가 없습니다.
          <br />
        </>
      </span>
      <span className="font-medium text-gray-900 font-inter">
        다른 검색어를 입력해 주세요.
      </span>
    </Text>
  ),
};

export default SearchResultSearchresult;
