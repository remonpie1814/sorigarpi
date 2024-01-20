import { Img, Text } from "components";

const TaleInfo = ({
  image,
  title,
  page,
  likeCount,
  commentCount,
  writer,
  creDate,
}) => {
  return (
    <>
      <div className="flex flex-row gap-5 items-center justify-start px-5 py-[15px] min-w-1/2">
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
        <div className="flex flex-col gap-0.5 min-h-[180px] md:h-auto items-start justify-center w-[360px]">
          <div className="flex flex-row gap-2.5 items-center justify-start w-[360px]">
            <Text
              className="flex-grow text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.24px] w-auto"
              size="txtInterMedium22Gray900_1"
            >
              {title}
            </Text>
            <Img
              className="h-[18px] md:h-auto object-cover w-[18px]"
              src="images/img_seticon.png"
              alt="seticon"
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
          <div className="flex flex-col flex-grow items-start justify-start px-0.5 w-full">
            <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { TaleInfo };
