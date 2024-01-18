import React from "react";

import PageDrawer from "drawers/Page";

import { Button, Footer, Img, List, MainHeader, Text } from "components";
import { Navbar } from "components";
import TaleDetailColumnspeakerfilledau from "components/TaleDetailColumnspeakerfilledau";
import TaleDetailReplyerow from "components/TaleDetailReplyerow";

const TaleDetailPage = () => {
  const [isOpenPageDrawer, setPageDrawer] = React.useState(false);

  const taleDetailReplyerowPropList = [
    {},
    { language: "댓글댓글" },
    { language: "댓글댓글" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto shadow-bs w-auto sm:w-full md:w-full">
        <MainHeader />
        <div className="flex flex-col items-center justify-start max-w-[1182px] mx-auto md:px-5 w-full">
          <Navbar className="flex flex-col items-center justify-start w-full" />
          <div className="flex flex-col gap-[22px] h-[1779px] md:h-auto items-center justify-start max-w-[1182px] pb-5 pt-[30px] w-full">
            <TaleDetailColumnspeakerfilledau className="flex flex-col items-center justify-start w-full" />
            <div className="flex md:flex-col flex-row gap-[45px] items-center justify-start w-full">
              <div className="bg-yellow-100 border border-amber-A100 border-solid flex flex-row gap-2.5 h-[60px] md:h-auto items-center justify-center py-2.5 rounded-[5px] w-[300px]">
                <Img
                  className="h-8 md:h-auto object-cover w-8"
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
                <div className="flex-wrap gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-[60px] md:h-auto items-center justify-center max-w-[700px] w-full">
                  <Button
                    className="border border-gray-200 border-solid cursor-pointer flex-1 font-medium min-w-[213px] text-base text-center tracking-[-0.18px] w-full"
                    shape="round"
                    color="gray_100"
                    size="2xl"
                    variant="fill"
                  >
                    그림 수정
                  </Button>
                  <Button
                    className="border border-gray-200 border-solid cursor-pointer flex-1 font-medium min-w-[213px] text-base text-center tracking-[-0.18px] w-full"
                    shape="round"
                    color="gray_100"
                    size="2xl"
                    variant="fill"
                  >
                    녹음 수정
                  </Button>
                  <Button
                    className="border border-gray-200 border-solid cursor-pointer flex-1 font-medium min-w-[213px] text-base text-center tracking-[-0.18px] w-full"
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
            <div className="flex flex-col h-[211px] md:h-auto items-center justify-start w-full">
              <Text
                className="text-base text-gray-900 tracking-[-0.30px] w-full"
                size="txtInterMedium16"
              >
                이 동화를 녹음한 사람
              </Text>
              <div className="flex md:flex-col flex-row gap-[35px] items-center justify-between px-[3px] py-5 w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[38px] grid grid-cols-2 w-[23%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-3 items-center justify-start w-auto">
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
                  <div className="flex flex-col gap-3 items-center justify-start w-auto">
                    <Img
                      className="h-[114px] md:h-auto object-cover w-[113px] sm:w-full"
                      src="images/img_image520.png"
                      alt="image520"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                      size="txtInterMedium16Gray900"
                    >
                      스파르탄
                    </Text>
                  </div>
                </List>
                <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                  <div className="h-[114px] relative w-[113px]">
                    <Img
                      className="h-[114px] m-auto object-cover w-[113px]"
                      src="images/img_6.png"
                      alt="Six_Two"
                    />
                    <div className="absolute h-[113px] inset-[0] justify-center m-auto w-28">
                      <div className="h-[113px] m-auto rounded-md w-28"></div>
                      <div className="absolute h-[61px] inset-[0] justify-center m-auto rotate-[-90deg] rounded-[3px] w-[42%]"></div>
                    </div>
                  </div>
                  <Text
                    className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                    size="txtInterMedium16Gray900"
                  >
                    멈뭄미
                  </Text>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[38px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 w-[62%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-3 items-center justify-start w-auto">
                    <Img
                      className="h-[114px] md:h-auto object-cover w-[113px] sm:w-full"
                      src="images/img_image520.png"
                      alt="image520"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                      size="txtInterMedium16Gray900"
                    >
                      스파르탄
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-start w-auto">
                    <Img
                      className="h-[114px] md:h-auto object-cover w-[113px] sm:w-full"
                      src="images/img_image520.png"
                      alt="image520"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                      size="txtInterMedium16Gray900"
                    >
                      스파르탄
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-start w-auto">
                    <Img
                      className="h-[114px] md:h-auto object-cover w-[113px] sm:w-full"
                      src="images/img_image520.png"
                      alt="image520"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                      size="txtInterMedium16Gray900"
                    >
                      스파르탄
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-start w-auto">
                    <Img
                      className="h-[114px] md:h-auto object-cover w-[113px] sm:w-full"
                      src="images/img_image520.png"
                      alt="image520"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                      size="txtInterMedium16Gray900"
                    >
                      스파르탄
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-start w-auto">
                    <Img
                      className="h-[114px] md:h-auto object-cover w-[113px] sm:w-full"
                      src="images/img_image520.png"
                      alt="image520"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                      size="txtInterMedium16Gray900"
                    >
                      스파르탄
                    </Text>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start p-[11px] w-full">
              <div className="bg-yellow-100 flex sm:flex-col flex-row gap-[30px] items-start justify-start sm:px-5 px-[30px] py-[13px] rounded-[10px] w-auto sm:w-full">
                <div className="flex flex-col h-[134px] md:h-auto items-center justify-start">
                  <div className="flex flex-col gap-[7px] items-center justify-start w-auto">
                    <Img
                      className="h-[49px] md:h-auto object-cover w-10 sm:w-full"
                      src="images/img__49x40.png"
                      alt="Twenty"
                    />
                    <Text
                      className="leading-[150.00%] text-base text-center text-gray-900 tracking-[-0.18px]"
                      size="txtInterMedium16Gray900"
                    >
                      <span className="text-gray-900 font-inter font-medium">
                        <>
                          유익해요
                          <br />
                        </>
                      </span>
                      <span className="text-gray-900 font-inter font-medium">
                        1
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[7px] items-center justify-start w-auto">
                  <Img
                    className="h-[49px] md:h-auto object-cover w-10 sm:w-full"
                    src="images/img__1.png"
                    alt="TwentyOne"
                  />
                  <Text
                    className="leading-[150.00%] text-base text-center text-gray-900 tracking-[-0.18px]"
                    size="txtInterMedium16Gray900"
                  >
                    <span className="text-gray-900 font-inter font-medium">
                      <>
                        재미있어요
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900 font-inter font-medium">
                      1
                    </span>
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[30px] grid grid-cols-2 w-[47%] sm:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-[7px] h-[134px] md:h-auto items-center justify-start w-auto">
                    <Img
                      className="h-[49px] md:h-auto object-cover w-10 sm:w-full"
                      src="images/img__2.png"
                      alt="TwentyTwo"
                    />
                    <Text
                      className="leading-[150.00%] text-base text-center text-gray-900 tracking-[-0.18px]"
                      size="txtInterMedium16Gray900"
                    >
                      <span className="text-gray-900 font-inter font-medium">
                        <>
                          슬퍼요
                          <br />
                        </>
                      </span>
                      <span className="text-gray-900 font-inter font-medium">
                        1
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] h-[134px] md:h-auto items-center justify-start w-auto">
                    <Img
                      className="h-[49px] md:h-auto object-cover w-10 sm:w-full"
                      src="images/img__3.png"
                      alt="TwentyThree"
                    />
                    <Text
                      className="leading-[150.00%] text-base text-center text-gray-900 tracking-[-0.18px]"
                      size="txtInterMedium16Gray900"
                    >
                      <span className="text-gray-900 font-inter font-medium">
                        <>
                          화나요
                          <br />
                        </>
                      </span>
                      <span className="text-gray-900 font-inter font-medium">
                        4
                      </span>
                    </Text>
                  </div>
                </List>
              </div>
            </div>
            <div className="bg-gray-100_01 flex flex-col gap-5 h-[536px] md:h-auto items-center justify-start sm:px-5 px-[35px] py-5 w-full">
              <Text
                className="text-base text-gray-900 tracking-[-0.30px] w-full"
                size="txtInterBold16"
              >
                댓글 3
              </Text>
              <List
                className="flex flex-col gap-5 items-center w-full"
                orientation="vertical"
              >
                {taleDetailReplyerowPropList.map((props, index) => (
                  <React.Fragment key={`TaleDetailReplyerow${index}`}>
                    <TaleDetailReplyerow
                      className="border-b border-blue_gray-100_01 border-solid flex flex-1 flex-col gap-[7px] h-[142px] md:h-auto items-center justify-start w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-start justify-between w-full">
              <div className="border border-blue_gray-100_01 border-solid flex flex-1 flex-col h-[135px] md:h-auto items-start justify-start max-w-[1067px] p-2.5 rounded-[3px] w-full">
                <Text
                  className="text-base text-blue_gray-100_01 tracking-[-0.18px] w-auto"
                  size="txtInterMedium16Bluegray10001"
                >
                  댓글 입력
                </Text>
              </div>
              <div className="bg-amber-A100 flex flex-col items-center justify-center p-8 sm:px-5 rounded-[5px]">
                <Text
                  className="my-[25px] text-base text-black-900 tracking-[-0.18px]"
                  size="txtInterMedium16Black900"
                >
                  등록
                </Text>
              </div>
            </div>
            <div className="bg-amber-A100 flex flex-col items-center justify-start p-4 rounded-[5px] w-[30%] md:w-full">
              <div className="flex flex-row gap-[3px] items-start justify-start w-auto">
                <Img
                  className="h-6 md:h-auto object-cover w-6"
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
        <Footer
          className="w-full flex gap-2.5 items-center justify-center
                  bg-blue_gray-50_02 md:px-5"
        />
      </div>
      {isOpenPageDrawer ? (
        <PageDrawer
          open={isOpenPageDrawer}
          onClose={() => setPageDrawer(false)}
        />
      ) : null}
    </>
  );
};

export default TaleDetailPage;
