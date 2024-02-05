import React, { useState } from "react";

import { Button, Img, Layout, Paging, Text } from "components";
import TempTaleListTemptalerow from "components/TempTaleListTemptalerow";

const TempTaleListPage = () => {
  // 페이징을 위한 변수. Paging 컴포넌트에 둘 다 props로 넣는다.
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <Layout>
        <div className="flex flex-col gap-5 items-center justify-start max-w-[1180px] mx-auto pb-5 pt-[30px] md:px-5 w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 w-full"
            size="txtInterMedium28Gray900"
          >
            임시 저장
          </Text>
          <div className="flex flex-col items-center justify-start w-full pb-1">
            <div className="flex flex-col items-end justify-start w-full">
              <div className="flex flex-row items-start justify-between w-full md:gap-10">
                <Text
                  className="mt-[3px] text-[22px] text-gray-900 sm:text-lg md:text-xl"
                  size="txtInterMedium22Gray900"
                >
                  총 3개
                </Text>
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-base text-center text-gray-400 tracking-[-0.18px] w-auto"
                    size="txtInterMedium16Gray400"
                  >
                    임시저장은 100개까지만 저장됩니다
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[100px] mr-[3px] text-base text-center tracking-[-0.18px]"
                shape="square"
                color="blue_gray_100"
                size="sm"
                variant="fill"
              >
                삭제
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="gap-20 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                {new Array(6).fill({}).map((props, index) => (
                  <React.Fragment key={`TempTaleListTemptalerow${index}`}>
                    <TempTaleListTemptalerow
                      className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <Paging
            className="flex flex-col items-center justify-center w-full gap-8"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxPage={10}
          />
        </div>
      </Layout>
    </>
  );
};

export default TempTaleListPage;
