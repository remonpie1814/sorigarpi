import React, { useState } from "react";

import {
  AutoResizingTextarea,
  Button,
  Img,
  Layout,
  List,
  Text,
} from "components";
import TaleDetailInfo from "components/TaleDetailInfo";
import TaleDetailReplyerow from "components/TaleDetailReplyerow";

const TaleDetailPage = () => {
  const [taleDetail, setTaleDetail] = useState({
    taleName: "토끼와 호랑이",
    taleInfo: "토끼랑 호랑이가 떡을 놓고 싸우는 이야기",
    writer: "가나ㅏ다다다ㄹㄴㅣㅏ",
    writerId: "abc",
    likedCount: "100",
    commentCount: "3",
    recordCount: "10",
  });

  // 녹음한 사람 state
  const [recorders, setRecorders] = useState([
    {
      recoder: "초록이",
      image: "images/img_image804.png",
      link: "#",
    },
  ]);
  // 댓글 state
  const [comments, setComments] = useState([{}, {}, {}]);

  // 댓글 유효성 평가 state
  const [comment, setComment] = useState("");

  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-start max-w-[1182px] mx-auto px-5 md:px-5 w-full">
          <div className="flex flex-col gap-[22px] min-h-[1000px] items-start justify-start max-w-[1182px] pb-5 pt-[30px] w-full">
            <TaleDetailInfo
              className="flex flex-col items-start justify-start w-full"
              {...taleDetail}
            />
            <div className="flex md:flex-col flex-row gap-[45px] items-center justify-start w-full">
              <div className="bg-yellow-100 border border-amber-A100 border-solid flex flex-row gap-2.5 h-[60px] md:h-auto items-center justify-center py-2.5 rounded-[5px] w-[300px] cursor-pointer">
                <Img
                  className="object-cover w-8 h-8 md:h-auto"
                  src="images/img_videoplay31.png"
                  alt="videoplayThirtyOne"
                />
                <Text
                  className="text-base text-center text-gray-900_01 tracking-[-0.18px] w-auto"
                  size="txtInterSemiBold16"
                >
                  책 읽기
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col h-[60px] md:h-auto items-center justify-end w-full">
                <div
                  className="flex flex-row gap-[30px] h-[60px] md:h-auto
                            items-end justify-end w-full md:justify-center"
                >
                  <Button
                    className="border border-gray-200 border-solid cursor-pointer font-medium
                    w-[180px] text-base text-center tracking-[-0.18px]"
                    shape="round"
                    color="gray_100"
                    size="2xl"
                    variant="fill"
                  >
                    그림 수정
                  </Button>
                  <Button
                    className="border border-gray-200 border-solid cursor-pointer font-medium
                    w-[180px] text-base text-center tracking-[-0.18px]"
                    shape="round"
                    color="gray_100"
                    size="2xl"
                    variant="fill"
                  >
                    녹음 수정
                  </Button>
                  <Button
                    className="border border-gray-200 border-solid cursor-pointer font-medium
                    w-[180px] text-base text-center tracking-[-0.18px]"
                    shape="round"
                    color="gray_100"
                    size="2xl"
                    variant="fill"
                  >
                    삭제
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[211px] md:h-auto items-center justify-start w-full overflow-x-auto overflow-y-hidden">
              <Text
                className="text-base text-gray-900 tracking-[-0.30px] w-full"
                size="txtInterMedium16"
              >
                이 동화를 녹음한 사람
              </Text>
              <div className="flex flex-row gap-[35px] items-center justify-start px-[3px] py-5 w-full">
                <div className="flex flex-col items-center justify-start w-auto gap-3">
                  <Img
                    className="h-[114px] md:h-auto object-cover w-[113px] sm:w-full"
                    src="images/img_image804.png"
                    alt="image607"
                  />
                  <Text
                    className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                    size="txtInterMedium16Gray900"
                  >
                    초록이
                  </Text>
                </div>
                {recorders.map((recorder, index) => {
                  return (
                    <div
                      key={"recorder" + index}
                      className="flex flex-col items-center justify-start w-auto gap-3"
                    >
                      <Img
                        className="h-[114px] md:h-auto object-cover w-[113px] sm:w-full"
                        src="images/img_image804.png"
                        alt="image607"
                      />
                      <Text
                        className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                        size="txtInterMedium16Gray900"
                      >
                        초록이
                      </Text>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col items-center justify-start p-[11px] w-full">
              <div className="bg-yellow-100 flex flex-row gap-[30px] items-center justify-center sm:px-5 px-[30px] py-[13px] rounded-[10px] w-auto sm:w-full">
                <div className="flex flex-col items-center justify-center h-auto">
                  <div className="flex flex-col gap-[7px] items-center justify-center w-auto">
                    <Img
                      className="object-cover w-10 h-10"
                      src="images/img__49x40.png"
                      alt="Twenty"
                    />
                    <Text
                      className="leading-[150.00%] text-base text-center text-gray-900 tracking-[-0.18px]"
                      size="txtInterMedium16Gray900"
                    >
                      <span className="font-medium text-gray-900 font-inter sm:text-sm">
                        <>
                          유익해요
                          <br />
                        </>
                      </span>
                      <span className="font-medium text-gray-900 font-inter">
                        1
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center h-auto">
                  <Img
                    className="object-cover w-10 h-10"
                    src="images/img__1.png"
                    alt="TwentyOne"
                  />
                  <Text
                    className="leading-[150.00%] text-base text-center text-gray-900 tracking-[-0.18px]"
                    size="txtInterMedium16Gray900"
                  >
                    <span className="font-medium text-gray-900 font-inter sm:text-sm">
                      <>
                        재미있어요
                        <br />
                      </>
                    </span>
                    <span className="font-medium text-gray-900 font-inter">
                      1
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center h-auto">
                  <Img
                    className="object-cover w-10 h-10"
                    src="images/img__2.png"
                    alt="TwentyTwo"
                  />
                  <Text
                    className="leading-[150.00%] text-base text-center text-gray-900 tracking-[-0.18px]"
                    size="txtInterMedium16Gray900"
                  >
                    <span className="font-medium text-gray-900 font-inter sm:text-sm">
                      <>
                        슬퍼요
                        <br />
                      </>
                    </span>
                    <span className="font-medium text-gray-900 font-inter">
                      1
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center h-auto">
                  <Img
                    className="object-cover w-10 h-10"
                    src="images/img__3.png"
                    alt="TwentyThree"
                  />
                  <Text
                    className="leading-[150.00%] text-base text-center text-gray-900 tracking-[-0.18px]"
                    size="txtInterMedium16Gray900"
                  >
                    <span className="font-medium text-gray-900 font-inter sm:text-sm">
                      <>
                        화나요
                        <br />
                      </>
                    </span>
                    <span className="font-medium text-gray-900 font-inter">
                      4
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray-100_01 flex flex-col gap-5 items-center justify-start sm:px-5 px-[35px] py-5 w-full">
              <Text
                className="text-base text-gray-900 tracking-[-0.30px] w-full"
                size="txtInterBold16"
              >
                댓글 3
              </Text>
              <List
                className="flex flex-col items-center w-full gap-5"
                orientation="vertical"
              >
                {comments.map((props, index) => (
                  <React.Fragment key={`TaleDetailReplyerow${index}`}>
                    <TaleDetailReplyerow
                      className="border-b border-blue_gray-100_01 border-solid flex flex-1 flex-col gap-[7px] h-[142px] 
                                md:h-auto items-start justify-start w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
            <form className="flex flex-row items-center w-full h-auto gap-5 md:flex-col">
              <AutoResizingTextarea
                className={"gap-2 w-full"}
                rows={3}
                placeholder="동화와 관련된 댓글만 입력해 주세요."
                value={comment}
                setValue={setComment}
                handleSubmit={(str) => {
                  console.log(str + "라는 값을 칸에 입력했음.");
                  console.log("-----이 밑에 form 제출하는 코드-----");
                }}
              />
            </form>
            <div
              className="bg-amber-A100 flex flex-col items-center justify-center p-4 rounded-[5px] w-[30%] md:w-full mx-auto"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="flex flex-row gap-[3px] items-start justify-start w-auto">
                <Img
                  className="object-cover w-6 h-6 md:h-auto"
                  src="images/img_arrow1.png"
                  alt="arrowOne"
                />
                <Text
                  className="text-base text-black-900 text-center tracking-[-0.18px] w-auto"
                  size="txtInterMedium16Black900"
                >
                  맨 위로
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TaleDetailPage;
