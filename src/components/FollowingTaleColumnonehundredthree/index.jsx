import React from "react";

import { Button, Img, Text } from "components";

const FollowingTaleColumnonehundredthree = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="bg-white-A700 justify-center pb-[15px] sm:pr-5 pr-[35px] pt-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px] w-full"
          size="txtInterMedium28"
        >
          {props?.followedauthorstext}
        </Text>
        <div className="flex flex-col items-start justify-center w-full">
          <div className="flex flex-col gap-2.5 items-center justify-start w-full">
            <div className="flex flex-col items-center justify-end max-w-[1180px] w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-row items-center justify-center w-auto">
                  <Text
                    className="text-base text-gray-900 tracking-[-0.30px] w-auto"
                    size="txtInterMedium16Gray900"
                  >
                    {props?.latestsorttext}
                  </Text>
                  <Img
                    className="h-8 md:h-auto object-cover w-8"
                    src="images/img_down11_32x32.png"
                    alt="downEleven"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[95%] md:w-full">
              <div className="gap-2.5 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-full">
                  <div className="h-[180px] relative rounded-[30px] w-[28%] sm:w-full">
                    <Img
                      className="h-[180px] m-auto object-cover rounded-[30px] w-full"
                      src="images/img_rectangle10.png"
                      alt="rectangleTen"
                    />
                    <Img
                      className="absolute h-[26px] object-cover right-[8%] top-[6%] w-[26px]"
                      src="images/img_speakerfilledaudiotool_26x26.png"
                      alt="speakerfilledau"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 h-[196px] md:h-auto items-start justify-center w-[360px]">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[360px]">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.24px] w-auto"
                        size="txtInterMedium22Gray900_1"
                      >
                        {props?.storytitletext}
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
                        {props?.tenptext}
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
                        {props?.fivetext}
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
                        {props?.fiveonetext}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start pb-0.5 px-0.5 w-full">
                      <div className="flex flex-col gap-0.5 items-start justify-start mb-[7px] w-auto">
                        <Text
                          className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
                          size="txtInterMedium14Gray900_1"
                        >
                          {props?.yumimomtext}
                        </Text>
                        <Text
                          className="text-gray-900 text-xs tracking-[-0.13px] w-auto"
                          size="txtInterMedium12"
                        >
                          {props?.p20231008text}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-full">
                  <div className="h-[180px] relative rounded-[30px] w-[28%] sm:w-full">
                    <Img
                      className="h-[180px] m-auto object-cover rounded-[30px] w-full"
                      src="images/img_rectangle10.png"
                      alt="rectangleTen"
                    />
                    <Img
                      className="absolute h-[26px] object-cover right-[8%] top-[6%] w-[26px]"
                      src="images/img_speakerfilledaudiotool_26x26.png"
                      alt="speakerfilledau"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 h-[196px] md:h-auto items-start justify-center w-[360px]">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[360px]">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.24px] w-auto"
                        size="txtInterMedium22Gray900_1"
                      >
                        {props?.storytitletext1}
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
                        {props?.tenptext1}
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
                        {props?.fivetext1}
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
                        {props?.fiveonetext1}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start pb-0.5 px-0.5 w-full">
                      <div className="flex flex-col gap-0.5 items-start justify-start mb-[7px] w-auto">
                        <Text
                          className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
                          size="txtInterMedium14Gray900_1"
                        >
                          {props?.yumimomtext1}
                        </Text>
                        <Text
                          className="text-gray-900 text-xs tracking-[-0.13px] w-auto"
                          size="txtInterMedium12"
                        >
                          {props?.p20231008text1}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-full">
                  <div className="h-[180px] relative rounded-[30px] w-[28%] sm:w-full">
                    <Img
                      className="h-[180px] m-auto object-cover rounded-[30px] w-full"
                      src="images/img_rectangle10.png"
                      alt="rectangleTen"
                    />
                    <Img
                      className="absolute h-[26px] object-cover right-[8%] top-[6%] w-[26px]"
                      src="images/img_speakerfilledaudiotool_26x26.png"
                      alt="speakerfilledau"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 h-[196px] md:h-auto items-start justify-center w-[360px]">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[360px]">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.24px] w-auto"
                        size="txtInterMedium22Gray900_1"
                      >
                        {props?.storytitletext2}
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
                        {props?.tenptext2}
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
                        {props?.fivetext2}
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
                        {props?.fiveonetext2}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start pb-0.5 px-0.5 w-full">
                      <div className="flex flex-col gap-0.5 items-start justify-start mb-[7px] w-auto">
                        <Text
                          className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
                          size="txtInterMedium14Gray900_1"
                        >
                          {props?.yumimomtext2}
                        </Text>
                        <Text
                          className="text-gray-900 text-xs tracking-[-0.13px] w-auto"
                          size="txtInterMedium12"
                        >
                          {props?.p20231008text2}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-full">
                  <div className="h-[180px] relative rounded-[30px] w-[28%] sm:w-full">
                    <Img
                      className="h-[180px] m-auto object-cover rounded-[30px] w-full"
                      src="images/img_rectangle10.png"
                      alt="rectangleTen"
                    />
                    <Img
                      className="absolute h-[26px] object-cover right-[8%] top-[6%] w-[26px]"
                      src="images/img_speakerfilledaudiotool_26x26.png"
                      alt="speakerfilledau"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 h-[196px] md:h-auto items-start justify-center w-[360px]">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[360px]">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.24px] w-auto"
                        size="txtInterMedium22Gray900_1"
                      >
                        {props?.storytitletext3}
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
                        {props?.tenptext3}
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
                        {props?.fivetext3}
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
                        {props?.fiveonetext3}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start pb-0.5 px-0.5 w-full">
                      <div className="flex flex-col gap-0.5 items-start justify-start mb-[7px] w-auto">
                        <Text
                          className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
                          size="txtInterMedium14Gray900_1"
                        >
                          {props?.yumimomtext3}
                        </Text>
                        <Text
                          className="text-gray-900 text-xs tracking-[-0.13px] w-auto"
                          size="txtInterMedium12"
                        >
                          {props?.p20231008text3}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-full">
                  <div className="h-[180px] relative rounded-[30px] w-[28%] sm:w-full">
                    <Img
                      className="h-[180px] m-auto object-cover rounded-[30px] w-full"
                      src="images/img_rectangle10.png"
                      alt="rectangleTen"
                    />
                    <Img
                      className="absolute h-[26px] object-cover right-[8%] top-[6%] w-[26px]"
                      src="images/img_speakerfilledaudiotool_26x26.png"
                      alt="speakerfilledau"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 h-[196px] md:h-auto items-start justify-center w-[360px]">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[360px]">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.24px] w-auto"
                        size="txtInterMedium22Gray900_1"
                      >
                        {props?.storytitletext4}
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
                        {props?.tenptext4}
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
                        {props?.fivetext4}
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
                        {props?.fiveonetext4}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start pb-0.5 px-0.5 w-full">
                      <div className="flex flex-col gap-0.5 items-start justify-start mb-[7px] w-auto">
                        <Text
                          className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
                          size="txtInterMedium14Gray900_1"
                        >
                          {props?.yumimomtext4}
                        </Text>
                        <Text
                          className="text-gray-900 text-xs tracking-[-0.13px] w-auto"
                          size="txtInterMedium12"
                        >
                          {props?.p20231008text4}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-full">
                  <div className="h-[180px] relative rounded-[30px] w-[28%] sm:w-full">
                    <Img
                      className="h-[180px] m-auto object-cover rounded-[30px] w-full"
                      src="images/img_rectangle10.png"
                      alt="rectangleTen"
                    />
                    <Img
                      className="absolute h-[26px] object-cover right-[8%] top-[6%] w-[26px]"
                      src="images/img_speakerfilledaudiotool_26x26.png"
                      alt="speakerfilledau"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 h-[196px] md:h-auto items-start justify-center w-[360px]">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[360px]">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.24px] w-auto"
                        size="txtInterMedium22Gray900_1"
                      >
                        {props?.storytitletext5}
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
                        {props?.tenptext5}
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
                        {props?.fivetext5}
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
                        {props?.fiveonetext5}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start pb-0.5 px-0.5 w-full">
                      <div className="flex flex-col gap-0.5 items-start justify-start mb-[7px] w-auto">
                        <Text
                          className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
                          size="txtInterMedium14Gray900_1"
                        >
                          {props?.yumimomtext5}
                        </Text>
                        <Text
                          className="text-gray-900 text-xs tracking-[-0.13px] w-auto"
                          size="txtInterMedium12"
                        >
                          {props?.p20231008text5}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-full">
                  <div className="h-[180px] relative rounded-[30px] w-[28%] sm:w-full">
                    <Img
                      className="h-[180px] m-auto object-cover rounded-[30px] w-full"
                      src="images/img_rectangle10.png"
                      alt="rectangleTen"
                    />
                    <Img
                      className="absolute h-[26px] object-cover right-[8%] top-[6%] w-[26px]"
                      src="images/img_speakerfilledaudiotool_26x26.png"
                      alt="speakerfilledau"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 h-[196px] md:h-auto items-start justify-center w-[360px]">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[360px]">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.24px] w-auto"
                        size="txtInterMedium22Gray900_1"
                      >
                        {props?.storytitletext6}
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
                        {props?.tenptext6}
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
                        {props?.fivetext6}
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
                        {props?.fiveonetext6}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start pb-0.5 px-0.5 w-full">
                      <div className="flex flex-col gap-0.5 items-start justify-start mb-[7px] w-auto">
                        <Text
                          className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
                          size="txtInterMedium14Gray900_1"
                        >
                          {props?.yumimomtext6}
                        </Text>
                        <Text
                          className="text-gray-900 text-xs tracking-[-0.13px] w-auto"
                          size="txtInterMedium12"
                        >
                          {props?.p20231008text6}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-full">
                  <div className="h-[180px] relative rounded-[30px] w-[28%] sm:w-full">
                    <Img
                      className="h-[180px] m-auto object-cover rounded-[30px] w-full"
                      src="images/img_rectangle10.png"
                      alt="rectangleTen"
                    />
                    <Img
                      className="absolute h-[26px] object-cover right-[8%] top-[6%] w-[26px]"
                      src="images/img_speakerfilledaudiotool_26x26.png"
                      alt="speakerfilledau"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 h-[196px] md:h-auto items-start justify-center w-[360px]">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[360px]">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.24px] w-auto"
                        size="txtInterMedium22Gray900_1"
                      >
                        {props?.storytitletext7}
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
                        {props?.tenptext7}
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
                        {props?.fivetext7}
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
                        {props?.fiveonetext7}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start pb-0.5 px-0.5 w-full">
                      <div className="flex flex-col gap-0.5 items-start justify-start mb-[7px] w-auto">
                        <Text
                          className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
                          size="txtInterMedium14Gray900_1"
                        >
                          {props?.yumimomtext7}
                        </Text>
                        <Text
                          className="text-gray-900 text-xs tracking-[-0.13px] w-auto"
                          size="txtInterMedium12"
                        >
                          {props?.p20231008text7}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-row gap-[33px] items-center justify-center md:px-10 sm:px-5 px-[82px] py-2 w-auto">
            <Button
              className="!text-black-900 cursor-pointer font-inter font-medium h-[49px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px] w-[49px]"
              shape="square"
              color="gray_300"
              size="md"
              variant="fill"
            >
              {props?.lbl44button}
            </Button>
            <Text
              className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray600"
            >
              {props?.twotext}
            </Text>
            <Text
              className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray600"
            >
              {props?.threetext}
            </Text>
            <Text
              className="text-[22px] sm:text-lg text-orange-400 md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Orange400"
            >
              {props?.fourtext}
            </Text>
            <Text
              className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray600"
            >
              {props?.fivetext8}
            </Text>
            <Text
              className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray600"
            >
              {props?.sixtext}
            </Text>
            <Button
              className="!text-black-900 cursor-pointer font-inter font-medium h-[49px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px] w-[49px]"
              shape="square"
              color="gray_300"
              size="md"
              variant="fill"
            >
              {props?.lbl45button}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

FollowingTaleColumnonehundredthree.defaultProps = {
  followedauthorstext: "팔로우한 작가의 동화",
  latestsorttext: "최신순",
  storytitletext: "신데렐라는 어려서 부모님을 잃고요",
  tenptext: "10p",
  fivetext: "5",
  fiveonetext: "5",
  yumimomtext: "유미엄마",
  p20231008text: "2023. 10. 08",
  storytitletext1: "신데렐라는 어려서 부모님을 잃고요",
  tenptext1: "10p",
  fivetext1: "5",
  fiveonetext1: "5",
  yumimomtext1: "유미엄마",
  p20231008text1: "2023. 10. 08",
  storytitletext2: "신데렐라는 어려서 부모님을 잃고요",
  tenptext2: "10p",
  fivetext2: "5",
  fiveonetext2: "5",
  yumimomtext2: "유미엄마",
  p20231008text2: "2023. 10. 08",
  storytitletext3: "신데렐라는 어려서 부모님을 잃고요",
  tenptext3: "10p",
  fivetext3: "5",
  fiveonetext3: "5",
  yumimomtext3: "유미엄마",
  p20231008text3: "2023. 10. 08",
  storytitletext4: "신데렐라는 어려서 부모님을 잃고요",
  tenptext4: "10p",
  fivetext4: "5",
  fiveonetext4: "5",
  yumimomtext4: "유미엄마",
  p20231008text4: "2023. 10. 08",
  storytitletext5: "신데렐라는 어려서 부모님을 잃고요",
  tenptext5: "10p",
  fivetext5: "5",
  fiveonetext5: "5",
  yumimomtext5: "유미엄마",
  p20231008text5: "2023. 10. 08",
  storytitletext6: "신데렐라는 어려서 부모님을 잃고요",
  tenptext6: "10p",
  fivetext6: "5",
  fiveonetext6: "5",
  yumimomtext6: "유미엄마",
  p20231008text6: "2023. 10. 08",
  storytitletext7: "신데렐라는 어려서 부모님을 잃고요",
  tenptext7: "10p",
  fivetext7: "5",
  fiveonetext7: "5",
  yumimomtext7: "유미엄마",
  p20231008text7: "2023. 10. 08",
  lbl44button: <>&lt;</>,
  twotext: "2",
  threetext: "3",
  fourtext: "4",
  fivetext8: "5",
  sixtext: "6",
  lbl45button: <>&gt;</>,
};

export default FollowingTaleColumnonehundredthree;
