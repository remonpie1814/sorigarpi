import React, { useState } from "react";

import { Button, Img, Layout, Text, TaleInfo, Paging } from "components";

const FollowingTalePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [taleList, setTaleList] = useState([
    {
      title: "제목제목제목제목제목",
      writer: "작가가가가",
      page: "1111111",
      likeCount: "1239",
      commentCount: "54399",
      image: "images/img_rectangle10_180x140.png",
      creDate: "2099.12.22",
    },
    {
      title: "제목제목제목제목제목",
      writer: "작가가가가",
      page: "1111111",
      likeCount: "1239",
      commentCount: "54399",
      image: "images/img_rectangle10_180x140.png",
      creDate: "2099.12.22",
    },
    {
      title: "제목제목제목제목제목",
      writer: "작가가가가",
      page: "1111111",
      likeCount: "1239",
      commentCount: "54399",
      image: "images/img_rectangle10_180x140.png",
      creDate: "2099.12.22",
    },
    {
      title: "제목제목제목제목제목",
      writer: "작가가가가",
      page: "1111111",
      likeCount: "1239",
      commentCount: "54399",
      image: "images/img_rectangle10_180x140.png",
      creDate: "2099.12.22",
    },
  ]);
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1180px] pb-[60px] pt-[30px] w-full">
            <Text
              className="bg-white-A700 justify-center pb-[15px] sm:pr-5 pr-[35px] pt-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px] w-full"
              size="txtInterMedium28"
            >
              팔로우한 사람의 동화
            </Text>
            <div className="flex flex-col items-start justify-center w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <div className="flex flex-col items-end justify-end max-w-[1180px] w-full">
                  <div className="flex flex-row items-center justify-center w-auto">
                    <Text
                      className="text-base text-gray-900 tracking-[-0.30px] w-auto"
                      size="txtInterMedium16Gray900"
                    >
                      최신순
                    </Text>
                    <Img
                      className="h-8 md:h-auto object-cover w-8"
                      src="images/img_down11_32x32.png"
                      alt="downEleven"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-between w-full">
                    <div className="grid grid-flow-row grid-cols-2 md:grid-cols-1 items-center justify-center w-full">
                      {taleList.map((tale, index) => {
                        return (
                          <div className="flex flex-row mx-auto md:flex-col">
                            <TaleInfo {...tale}>
                              {
                                // <>
                                //   <Button
                                //     className="!text-black-900 cursor-pointer font-inter font-medium min-w-[100px] text-center text-sm tracking-[-0.15px]"
                                //     shape="square"
                                //     color="gray_300"
                                //     size="md"
                                //     variant="fill"
                                //   >
                                //     그림수정
                                //   </Button>
                                //   <Button
                                //     className="!text-black-900 cursor-pointer font-inter font-medium min-w-[100px] text-center text-sm tracking-[-0.15px]"
                                //     shape="square"
                                //     color="gray_300"
                                //     size="md"
                                //     variant="fill"
                                //   >
                                //     녹음수정
                                //   </Button>
                                //   <Button
                                //     className="!text-black-900 cursor-pointer font-inter font-medium min-w-[100px] text-center text-sm tracking-[-0.15px]"
                                //     shape="square"
                                //     color="gray_300"
                                //     size="md"
                                //     variant="fill"
                                //   >
                                //     삭제
                                //   </Button>
                                // </>
                              }
                            </TaleInfo>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Paging
              className="flex flex-col gap-8 items-center justify-center w-full"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              maxPage={9}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FollowingTalePage;
