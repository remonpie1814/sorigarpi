import React, { useState } from "react";

import { Button, Img, Modal, ReportModal, Text } from "components";
import { useNavigate } from "react-router-dom";

const TaleDetailInfo = ({
  className,
  taleId,
  taleName,
  taleInfo,
  creDate,
  writer,
  writerId,
  likedCount,
  commentCount,
  recordCount,
}) => {
  const navigate = useNavigate();
  const [taleModal, setTaleModal] = useState(false);
  const [reportModal, setReportModal] = useState(false);
  return (
    <>
      <div className={className}>
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-full">
          <div className="h-[393px] relative w-[26%] md:w-full">
            <Img
              className="absolute h-[393px] inset-[0] justify-center m-auto object-cover rounded-[5px] w-full"
              src="images/img_image932.png"
              alt="image932"
            />
            <div className="absolute flex flex-col items-center justify-center p-5 right-[0] top-[0] w-20">
              <Img
                className="h-10 md:h-auto rounded-[50%] w-10"
                src="images/img_speakerfilledaudiotool.png"
                alt="speakerfilledau"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-1 h-full items-start justify-start w-full">
            <div className="flex md:flex-col flex-row gap-1 items-center justify-center w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.79px]
                w-aut flex flex-grow"
                size="txtInterMedium36"
              >
                {taleName}
              </Text>
              <Button
                className="cursor-pointer w-[50px] h-[50px] text-4xl text-center"
                onClick={() => {
                  setTaleModal(true);
                }}
              >
                ⋮
              </Button>
            </div>
            <Text
              className="text-base text-gray-400 tracking-[-0.18px] w-full"
              size="txtInterMedium16Gray400_1"
            >
              {creDate}
            </Text>
            <div className="flex flex-row gap-2.5 items-center justify-start w-full">
              <Img
                className="h-[31px] md:h-auto object-cover w-[33px]"
                src="images/img_image804.png"
                alt="image804"
              />
              <Button
                className="text-base text-gray-600 underline w-auto"
                onClick={() => {
                  navigate(`/profile/${writerId}`);
                }}
              >
                <>{writer} &gt;</>
              </Button>
            </div>
            <div className="flex flex-row gap-5 items-center justify-start py-2.5 w-full">
              <div className="flex flex-row gap-2.5 h-[30px] md:h-auto items-center justify-center">
                <Img
                  className="h-[25px] md:h-auto object-cover w-[25px]"
                  src="images/img_image804_25x25.png"
                  alt="image804_One"
                />
                <Text
                  className="text-base text-center text-gray-900 tracking-[-0.18px]"
                  size="txtInterMedium16Gray900"
                >
                  {likedCount}
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 h-8 md:h-auto items-center justify-center">
                <Img
                  className="h-8 md:h-auto object-cover w-8"
                  src="images/img_image805.png"
                  alt="image805"
                />
                <Text
                  className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                  size="txtInterMedium16"
                >
                  {commentCount}
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 h-[30px] md:h-auto items-center justify-center">
                <Img
                  className="h-[25px] md:h-auto object-cover w-[25px]"
                  src="images/img__25x25.png"
                  alt="Eight"
                />
                <Text
                  className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                  size="txtInterMedium16"
                >
                  {recordCount}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[150.00%] max-w-[850px] md:max-w-full text-base text-gray-600 tracking-[-0.18px]"
              size="txtInterMedium16Gray600"
            >
              {taleInfo}
            </Text>
          </div>
        </div>
      </div>
      {taleModal && (
        <>
          <TaleModal
            setTaleModal={setTaleModal}
            setReportModal={setReportModal}
          />
        </>
      )}
      {reportModal && (
        <>
          <ReportModal
            type="tale"
            id={taleId}
            writer={writer}
            content={taleName}
            closeModal={() => {
              setReportModal(false);
            }}
          />
        </>
      )}
    </>
  );
};

const TaleModal = ({ setTaleModal, setReportModal }) => {
  return (
    <>
      <div
        className="fixed w-screen h-screen top-0 left-0 z-10
           flex items-center justify-center"
      >
        <div
          className="fixed bg-black-900 opacity-50 w-screen h-screen top-0 left-0 z-0"
          onClick={() => {
            setTaleModal(false);
          }}
        ></div>
        <div
          className="flex flex-col gap-2 p-2
                        w-[200px] h-auto rounded-xl bg-white-A700
                        z-20"
        >
          <Button className="flex flex-row p-2">
            <img
              className="w-[20px]"
              src="/images/free-icon-share-3989188.png"
              alt=""
            />
            <span className="flex-grow">공유하기</span>
          </Button>
          <Button
            className="flex flex-row p-2"
            onClick={() => {
              setReportModal(true);
              setTaleModal(false);
            }}
          >
            <img
              className="w-[20px]"
              src="/images/free-icon-problem-report-7689567.png"
              alt=""
            />
            <span className="flex-grow">신고하기</span>
          </Button>
        </div>
      </div>
    </>
  );
};

TaleDetailInfo.defaultProps = {
  taleName: "동화제목",
  taleInfo: "책 설멍",
  writer: "작가 이름",
  likedCount: "좋아요 수",
  commentCount: "댓글 수",
  recordCount: "녹음한 사람 수",
};

export default TaleDetailInfo;
