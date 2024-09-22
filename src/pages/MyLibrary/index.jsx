import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const SCOPE = {
    DEFAULT: "모두",
    ALL: "전체공개",
    PRIVATE: "비공개",
  };
  const TYPE = {
    DEFAULT: "모두",
    PICTURE: "그림만",
    RECORD: "녹음만",
  };
  const [scope, setScope] = useState(SCOPE.DEFAULT);
  const [type, setType] = useState(TYPE.DEFAULT);
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
                  className="h-full border-0 bg-blue_gray-50"
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
                className={`text-base tracking-[-0.30px] w-[80px] cursor-pointer ${
                  scope === SCOPE.DEFAULT
                    ? "text-black-900"
                    : "text-blue_gray-100_01"
                }`}
                size={
                  scope === SCOPE.DEFAULT
                    ? "txtInterBold16Black900"
                    : "txtInterMedium16Bluegray10001"
                }
                onClick={() => {
                  setScope(SCOPE.DEFAULT);
                }}
              >
                모두
              </Text>
              <Text
                className={`text-base tracking-[-0.30px] w-[80px] cursor-pointer ${
                  scope === SCOPE.ALL
                    ? "text-black-900"
                    : "text-blue_gray-100_01"
                }`}
                size={
                  scope === SCOPE.ALL
                    ? "txtInterBold16Black900"
                    : "txtInterMedium16Bluegray10001"
                }
                onClick={() => {
                  setScope(SCOPE.ALL);
                }}
              >
                전체 공개
              </Text>
              <Text
                className={`text-base tracking-[-0.30px] w-[80px] cursor-pointer ${
                  scope === SCOPE.PRIVATE
                    ? "text-black-900"
                    : "text-blue_gray-100_01"
                }`}
                size={
                  scope === SCOPE.PRIVATE
                    ? "txtInterBold16Black900"
                    : "txtInterMedium16Bluegray10001"
                }
                onClick={() => {
                  setScope(SCOPE.PRIVATE);
                }}
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
                className={`text-base tracking-[-0.30px] w-[80px] cursor-pointer ${
                  type === TYPE.DEFAULT
                    ? "text-black-900"
                    : "text-blue_gray-100_01"
                }`}
                size={
                  type === TYPE.DEFAULT
                    ? "txtInterBold16Black900"
                    : "txtInterMedium16Bluegray10001"
                }
                onClick={() => {
                  setType(TYPE.DEFAULT);
                }}
              >
                모두
              </Text>
              <Text
                className={`text-base tracking-[-0.30px] w-[80px] cursor-pointer ${
                  type === TYPE.PICTURE
                    ? "text-black-900"
                    : "text-blue_gray-100_01"
                }`}
                size={
                  type === TYPE.PICTURE
                    ? "txtInterBold16Black900"
                    : "txtInterMedium16Bluegray10001"
                }
                onClick={() => {
                  setType(TYPE.PICTURE);
                }}
              >
                그림만
              </Text>
              <Text
                className={`text-base tracking-[-0.30px] w-[80px] cursor-pointer ${
                  type === TYPE.RECORD
                    ? "text-black-900"
                    : "text-blue_gray-100_01"
                }`}
                size={
                  type === TYPE.RECORD
                    ? "txtInterBold16Black900"
                    : "txtInterMedium16Bluegray10001"
                }
                onClick={() => {
                  setType(TYPE.RECORD);
                }}
              >
                녹음만
              </Text>
            </div>
          </List>
          <MyLibraryInforow
            className="flex flex-col gap-[15px] items-start justify-center w-full"
            categorytext={scope}
            privacytext={type}
            setScope={setScope}
            setType={setType}
            SCOPE={SCOPE}
            TYPE={TYPE}
          />
          <div className="flex flex-col items-end justify-end max-w-[1180px] w-full">
            <div className="flex flex-row items-center justify-center w-auto">
              <select
                className="border-none font active:border-none focus:border-none"
                name=""
                id=""
              >
                <option value="" selected>
                  최신순
                </option>
                <option value="">오래된순</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-[15px] items-center justify-start w-full">
            <div className="flex flex-col items-start justify-between w-full">
              <div className="grid items-center justify-center w-full grid-flow-row grid-cols-2 md:grid-cols-1">
                {taleList.map((tale, index) => {
                  return (
                    <div className="flex flex-row md:flex-col">
                      <TaleInfo {...tale}>
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
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="relative w-full h-16">
            <div className="absolute md:h-16 h-[64px] w-[64px] inset-y-0 right-0">
              <div
                className="w-16 h-16 mx-auto rounded-full cursor-pointer bg-amber-A100"
                onClick={() => {
                  navigate("/canvas");
                }}
              >
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-max"
                  size="txtInterMedium24"
                >
                  +
                </Text>
              </div>
            </div>
          </div>
          <Paging
            className="flex flex-col items-center justify-center w-full gap-8"
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
