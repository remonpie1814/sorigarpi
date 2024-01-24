import React, { useState } from "react";

import {
  Button,
  Img,
  List,
  MainHeader,
  Navbar,
  Paging,
  TaleInfo,
  Text,
  Layout,
} from "components";
import MyLibraryInforow from "components/MyLibraryInforow";

const MyLibraryPage = () => {
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
        <div className="flex flex-col gap-10 h-[1482px] md:h-auto items-center justify-start max-w-[1180px] mx-auto md:px-5 py-[31px] w-full">
          <div className="bg-white-A700 flex flex-row md:gap-10 items-start justify-between py-[3px] w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px]"
              size="txtInterMedium28"
            >
              내 책장
            </Text>
            <Button
              className="cursor-pointer font-medium min-w-[120px] my-0.5 text-base text-center tracking-[-0.30px]"
              shape="round"
              color="blue_gray_50"
              size="md"
              variant="fill"
            >
              임시저장
            </Button>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <form
                className="flex flex-row items-center justify-start
                            w-[27%] h-[46px] md:w-full"
              >
                <input
                  className="bg-blue_gray-50 h-full border-0"
                  type="text"
                  placeholder="작품명 검색"
                  name=""
                  id=""
                />
                <button className="bg-amber-A100 flex flex-col h-[46px] items-center justify-start p-1 w-[46px]">
                  <Img
                    className="h-[35px] md:h-auto object-cover"
                    src="images/img_image926.png"
                    alt="image926"
                  />
                </button>
              </form>
            </div>
          </div>

          <List
            className="flex flex-col items-center w-full"
            orientation="vertical"
          >
            <div
              className="bg-white-A700 border-blue_gray-100_01 border-solid border-y 
                        flex flex-1 flex-row md:gap-10 gap-[70px]
                        items-start justify-start my-0 py-[15px] w-full"
            >
              <Text
                className="text-base text-black-900 tracking-[-0.30px] min-w-[100px]"
                size="txtInterMedium16Black900_1"
              >
                공개 범위
              </Text>
              <Text
                className="text-base text-black-900 tracking-[-0.30px] w-[80px]"
                size="txtInterBold16Black900"
              >
                모두
              </Text>
              <Text
                className="text-base text-blue_gray-100_01 tracking-[-0.30px] w-[80px]"
                size="txtInterMedium16Bluegray10001"
              >
                전체 공개
              </Text>
              <Text
                className="text-base text-blue_gray-100_01 tracking-[-0.30px] w-[80px]"
                size="txtInterMedium16Bluegray10001"
              >
                비공개
              </Text>
            </div>
            <div
              className="border-b border-blue_gray-100_cc border-solid flex flex-1
                        flex-row md:gap-10 gap-[70px] items-start justify-start my-0 py-[15px] w-full"
            >
              <Text
                className="text-base text-black-900 tracking-[-0.30px] min-w-[100px]"
                size="txtInterMedium16Black900_1"
              >
                분류
              </Text>
              <Text
                className="text-base text-blue_gray-100_01 tracking-[-0.30px] w-[80px]"
                size="txtInterMedium16Bluegray10001"
              >
                모두
              </Text>
              <Text
                className="text-base text-black-900 tracking-[-0.30px] w-[80px]"
                size="txtInterBold16Black900"
              >
                그림만
              </Text>
              <Text
                className="text-base text-blue_gray-100_01 tracking-[-0.30px] w-[80px]"
                size="txtInterMedium16Bluegray10001"
              >
                녹음만
              </Text>
            </div>
          </List>
          <MyLibraryInforow className="flex flex-col gap-[15px] items-start justify-center w-full" />
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
              <div className="flex flex-col items-center justify-start w-full">
                {/* 한 줄에 두 개씩 표시하기 위해 filter로 2씩 건너뜀.*/}
                {taleList
                  .filter((_, i) => i % 2 === 0)
                  .map((tale, index) => {
                    return (
                      <div className="flex flex-row md:flex-col">
                        <TaleInfo
                          title={taleList[index * 2]?.title}
                          image={taleList[index * 2]?.image}
                          page={taleList[index * 2]?.page}
                          likeCount={taleList[index * 2]?.likeCount}
                          commentCount={taleList[index * 2]?.commentCount}
                          writer={taleList[index * 2]?.writer}
                          creDate={taleList[index * 2]?.creDate}
                        >
                          <Button
                            className="cursor-pointer font-medium 
                                        text-base text-center w-[80px]"
                            shape="square"
                            color="gray_300"
                            size="sm"
                            variant="fill"
                          >
                            복사
                          </Button>
                          <Button
                            className="cursor-pointer font-medium 
                                        text-base text-center w-[80px]"
                            shape="square"
                            color="gray_300"
                            size="sm"
                            variant="fill"
                          >
                            삭제
                          </Button>
                        </TaleInfo>
                        {/* 표시할 동화 수가 홀수라면 마지막 빈공간 채워주기 처리 */}
                        {(index + 1) * 2 > taleList.length ? (
                          <div className="w-[540px]"></div>
                        ) : (
                          <TaleInfo
                            title={taleList[index * 2 + 1]?.title}
                            image={taleList[index * 2 + 1]?.image}
                            page={taleList[index * 2 + 1]?.page}
                            likeCount={taleList[index * 2 + 1]?.likeCount}
                            commentCount={taleList[index * 2 + 1]?.commentCount}
                            writer={taleList[index * 2 + 1]?.writer}
                            creDate={taleList[index * 2 + 1]?.creDate}
                          >
                            <Button
                              className="cursor-pointer font-medium 
                            text-base text-center w-[80px]"
                              shape="square"
                              color="gray_300"
                              size="sm"
                              variant="fill"
                            >
                              복사
                            </Button>
                            <Button
                              className="cursor-pointer font-medium 
                            text-base text-center w-[80px]"
                              shape="square"
                              color="gray_300"
                              size="sm"
                              variant="fill"
                            >
                              삭제
                            </Button>
                          </TaleInfo>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="flex flex-col h-[69px] md:h-auto items-center justify-end w-full">
            <div className="md:h-16 h-[69px] pb-[5px] relative w-[70px]">
              <div className="bg-amber-A100 h-16 mx-auto rounded-[35px] w-full"></div>
              <Text
                className="absolute h-max inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-max"
                size="txtInterMedium24"
              >
                +
              </Text>
            </div>
          </div>
          <Paging
            className="flex flex-col gap-8 items-center justify-center w-full"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxPage={9}
          />
        </div>
      </Layout>
    </>
  );
};

export default MyLibraryPage;
