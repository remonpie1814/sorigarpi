import React from "react";

import { Button, Img, Layout, Text } from "components";
import SearchResultSearchresult from "components/SearchResultSearchresult";

const SearchResultPage = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-start max-w-[1180px] px-5 mx-auto md:px-5 w-full">
          <div className="flex flex-col h-[875px] md:h-auto items-center justify-start max-w-[1180px] pb-5 pt-[30px] w-full">
            <SearchResultSearchresult
              className="flex flex-col gap-[15px] items-center w-full justify-start md:w-full"
              noresultstext={
                <Text className="font-bold leading-[150.00%] text-base text-black-900 text-center tracking-[-0.30px]">
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
              }
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SearchResultPage;
