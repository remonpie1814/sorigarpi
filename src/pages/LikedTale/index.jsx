import React, { useState } from "react";

import { Button, Img, Layout, Text } from "components";
import MyLibraryPaging from "components/MyLibraryPaging";
import { TaleInfo } from "components/TaleInfo";

const LikedTalePage = () => {
  // 페이징을 위한 변수. Paging 컴포넌트에 둘 다 props로 넣는다.
  const [currentPage, setCurrentPage] = useState(1);
  // 페이지에 표시할 동화들의 state. 백엔드에서 가져와야 함.
  const [likedTales, setLikedTales] = useState([
    {
      image: "images/img_rectangle10.png",
      title: "신데렐라",
      writer: "유미엄마",
      page: "10",
      likeCount: "8",
      commentCount: "5",
      creDate: "2023.10.23",
    },
    {
      image: "images/img_rectangle10.png",
      title: "신데렐라",
      writer: "유미엄마",
      page: "10",
      likeCount: "8",
      commentCount: "5",
      creDate: "2023.10.23",
    },
    {
      image: "images/img_rectangle10.png",
      title: "신데렐라",
      writer: "유미엄마",
      page: "10",
      likeCount: "8",
      commentCount: "5",
      creDate: "2023.10.23",
    },
  ]);
  return (
    <>
      <Layout>
        <div
          className="flex flex-col items-center justify-start
                    max-w-[1180px] mx-auto md:px-5 w-full"
        >
          <div
            className="flex flex-col gap-10 items-center justify-start
                      max-w-[1180px] pb-[60px] pt-[30px] w-full"
          >
            <Text
              className="bg-white-A700 justify-center
                        sm:pr-5 sm:text-2xl md:text-[26px]
                        text-[28px] text-black-900 tracking-[-0.53px] w-full"
              size="txtInterMedium28"
            >
              좋아요 누른 동화
            </Text>
            <div className="flex flex-col items-start justify-center w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <form
                  className="flex flex-row items-center justify-start pl-3
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
            <div className="flex flex-col items-start justify-center w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                {/* 한 줄에 두 개씩 표시하기 위해 filter로 2씩 건너뜀.*/}
                {likedTales
                  .filter((_, i) => i % 2 === 0)
                  .map((tale, index) => {
                    return (
                      <div className="flex flex-row md:flex-col">
                        <TaleInfo
                          title={likedTales[index * 2]?.title}
                          image={likedTales[index * 2]?.image}
                          page={likedTales[index * 2]?.page}
                          likeCount={likedTales[index * 2]?.likeCount}
                          commentCount={likedTales[index * 2]?.commentCount}
                          writer={likedTales[index * 2]?.writer}
                          creDate={likedTales[index * 2]?.creDate}
                        />

                        {/* 표시할 동화 수가 홀수라면 마지막 빈공간 채워주기 처리 */}
                        {(index + 1) * 2 > likedTales.length ? (
                          <div className="w-[540px]"></div>
                        ) : (
                          <TaleInfo
                            title={likedTales[index * 2 + 1]?.title}
                            image={likedTales[index * 2 + 1]?.image}
                            page={likedTales[index * 2 + 1]?.page}
                            likeCount={likedTales[index * 2 + 1]?.likeCount}
                            commentCount={
                              likedTales[index * 2 + 1]?.commentCount
                            }
                            writer={likedTales[index * 2 + 1]?.writer}
                            creDate={likedTales[index * 2 + 1]?.creDate}
                          />
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <MyLibraryPaging
                className="flex flex-col gap-8 items-center justify-center w-full"
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                maxPage={9}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LikedTalePage;
