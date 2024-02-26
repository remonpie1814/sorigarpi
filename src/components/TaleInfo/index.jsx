import { Button, Img, Text } from "components";
import { useState } from "react";

const TaleInfo = ({
  image,
  title,
  page,
  likeCount,
  commentCount,
  writer,
  creDate,
  children,
}) => {
  const [optionModal, setOptionModal] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  // todo: 동화 삭제 버튼 함수 채우기
  function handleTaleDelete() {}
  return (
    <>
      <div className="relative flex flex-row gap-5 items-center justify-start px-5 py-[15px] min-w-1/2">
        {deleteConfirmOpen && (
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20
        flex flex-col
        border-[1px] shadow-md"
          >
            <div className="p-5">삭제하시겠습니까?</div>
            <div className="flex flex-row items-center justify-between w-full">
              <Button
                className="text-center w-1/2 font-bold
              hover:bg-gray-300 p-4"
                onClick={() => {
                  setDeleteConfirmOpen(false);
                }}
              >
                아니오
              </Button>
              <Button
                className=" w-1/2 text-center font-bold text-red-500 
              hover:bg-gray-300 p-4"
                onClick={() => {
                  handleTaleDelete();
                  setDeleteConfirmOpen(false);
                }}
              >
                네
              </Button>
            </div>
          </div>
        )}
        <div className="h-[180px] relative rounded-[30px] w-[120px]">
          <Img
            className="h-[180px] m-auto object-cover w-full"
            src={image}
            alt="동화 이미지"
          />
          <Img
            className="absolute h-[26px] object-cover right-[8px] top-[8px] w-[26px]"
            src="images/img_speakerfilledaudiotool_26x26.png"
            alt="speakerfilledau"
          />
        </div>
        <div className="relative flex flex-col flex-grow gap-0.5 min-h-[180px] md:h-auto items-start justify-center w-[360px]">
          {optionModal && (
            <div
              className="absolute top-0 right-0 
            flex flex-col items-center justify-center gap-2 p-4
           bg-white-A700 border-[1px]"
            >
              <Button
                onClick={() => {
                  setDeleteConfirmOpen(true);
                  setOptionModal(false);
                }}
              >
                전체 삭제
              </Button>
              <div>동화 삭제</div>
              <div>녹음 삭제</div>
              <Button
                onClick={() => {
                  setOptionModal(false);
                }}
              >
                취소
              </Button>
            </div>
          )}
          <div className="flex flex-row gap-2.5 items-center justify-start w-full min-w-[360px]">
            <Text
              className="flex-grow text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.24px] w-auto"
              size="txtInterMedium22Gray900_1"
            >
              {title}
            </Text>
            <Img
              className="h-[18px] md:h-auto object-cover w-[18px] cursor-pointer"
              src="images/img_seticon.png"
              alt="seticon"
              onClick={() => {
                setOptionModal(true);
              }}
            />
          </div>
          <div className="flex flex-col items-center justify-start w-auto">
            <Text
              className="text-gray-900 text-sm w-auto"
              size="txtInterMedium14Gray900"
            >
              {page}p
            </Text>
          </div>
          <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
            <Img
              className="h-[18px] md:h-auto object-cover w-[18px]"
              src="images/img_image922.png"
              alt="image922"
            />
            <Text
              className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
              size="txtInterMedium14Gray900_1"
            >
              {likeCount}
            </Text>
            <Img
              className="h-6 md:h-auto object-cover w-6"
              src="images/img_image921.png"
              alt="image921"
            />
            <Text
              className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
              size="txtInterMedium14Gray900_1"
            >
              {commentCount}
            </Text>
          </div>
          <div className="flex flex-row flex-grow px-0.5 w-full">
            <div className="flex flex-col flex-grow gap-0.5 items-start justify-start w-auto">
              <Text
                className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
                size="txtInterMedium14Gray900_1"
              >
                {writer}
              </Text>
              <Text
                className="text-gray-900 text-xs tracking-[-0.13px] w-auto"
                size="txtInterMedium12"
              >
                {creDate}
              </Text>
              {
                <div className="flex flex-col flex-grow w-full items-end justify-end">
                  <div className="flex flex-row gap-1 mt-auto">{children}</div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { TaleInfo };
