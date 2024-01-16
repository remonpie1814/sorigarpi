import React from "react";

import { Button, Img, Text } from "components";

const LikedTaleColumnseventyeight = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="bg-white-A700 justify-center pb-[15px] sm:pr-5 pr-[35px] pt-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px] w-full"
          size="txtInterMedium28"
        >
          {props?.likedtaletitle}
        </Text>
        <div className="flex flex-col items-start justify-center w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="bg-blue_gray-50 flex flex-row items-center justify-start pl-3 rounded-br-[5px] rounded-tr-[5px] w-[27%] md:w-full">
              <div className="flex flex-col items-start justify-start pr-[7px] py-[7px]">
                <Text
                  className="text-base text-gray-400_01 tracking-[-0.30px]"
                  size="txtInterMedium16Gray40001"
                >
                  {props?.searchtitle}
                </Text>
              </div>
              <div className="bg-amber-A100 flex flex-col h-[46px] items-center justify-start p-1 w-[46px]">
                <Img
                  className="h-[35px] md:h-auto object-cover w-[98%]"
                  src="images/img_image926.png"
                  alt="image926"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <div className="flex flex-col gap-2.5 items-center justify-start w-full">
            <div className="flex flex-col items-center justify-end max-w-[1180px] w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-row items-center justify-center w-auto">
                  <Text
                    className="text-base text-gray-900 tracking-[-0.30px] w-auto"
                    size="txtInterMedium16Gray900"
                  >
                    {props?.sorttitle}
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
                        {props?.text1}
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
                        {props?.text3}
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
                        {props?.text4}
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
                        {props?.text5}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start pb-0.5 px-0.5 w-full">
                      <div className="flex flex-col gap-0.5 items-start justify-start mb-[7px] w-auto">
                        <Text
                          className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
                          size="txtInterMedium14Gray900_1"
                        >
                          {props?.text6}
                        </Text>
                        <Text
                          className="text-gray-900 text-xs tracking-[-0.13px] w-auto"
                          size="txtInterMedium12"
                        >
                          {props?.text7}
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
                        {props?.text8}
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
                        {props?.text10}
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
                        {props?.text11}
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
                        {props?.text12}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start pb-0.5 px-0.5 w-full">
                      <div className="flex flex-col gap-0.5 items-start justify-start mb-[7px] w-auto">
                        <Text
                          className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
                          size="txtInterMedium14Gray900_1"
                        >
                          {props?.text13}
                        </Text>
                        <Text
                          className="text-gray-900 text-xs tracking-[-0.13px] w-auto"
                          size="txtInterMedium12"
                        >
                          {props?.text14}
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
                        {props?.text15}
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
                        {props?.text17}
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
                        {props?.text18}
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
                        {props?.text19}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start pb-0.5 px-0.5 w-full">
                      <div className="flex flex-col gap-0.5 items-start justify-start mb-[7px] w-auto">
                        <Text
                          className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
                          size="txtInterMedium14Gray900_1"
                        >
                          {props?.text20}
                        </Text>
                        <Text
                          className="text-gray-900 text-xs tracking-[-0.13px] w-auto"
                          size="txtInterMedium12"
                        >
                          {props?.text21}
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
                        {props?.text22}
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
                        {props?.text24}
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
                        {props?.text25}
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
                        {props?.text26}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start pb-0.5 px-0.5 w-full">
                      <div className="flex flex-col gap-0.5 items-start justify-start mb-[7px] w-auto">
                        <Text
                          className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
                          size="txtInterMedium14Gray900_1"
                        >
                          {props?.text27}
                        </Text>
                        <Text
                          className="text-gray-900 text-xs tracking-[-0.13px] w-auto"
                          size="txtInterMedium12"
                        >
                          {props?.text28}
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
                        {props?.text29}
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
                        {props?.text31}
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
                        {props?.text32}
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
                        {props?.text33}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start pb-0.5 px-0.5 w-full">
                      <div className="flex flex-col gap-0.5 items-start justify-start mb-[7px] w-auto">
                        <Text
                          className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
                          size="txtInterMedium14Gray900_1"
                        >
                          {props?.text34}
                        </Text>
                        <Text
                          className="text-gray-900 text-xs tracking-[-0.13px] w-auto"
                          size="txtInterMedium12"
                        >
                          {props?.text35}
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
                        {props?.text36}
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
                        {props?.text38}
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
                        {props?.text39}
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
                        {props?.text40}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start pb-0.5 px-0.5 w-full">
                      <div className="flex flex-col gap-0.5 items-start justify-start mb-[7px] w-auto">
                        <Text
                          className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
                          size="txtInterMedium14Gray900_1"
                        >
                          {props?.text41}
                        </Text>
                        <Text
                          className="text-gray-900 text-xs tracking-[-0.13px] w-auto"
                          size="txtInterMedium12"
                        >
                          {props?.text42}
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
                        {props?.text43}
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
                        {props?.text45}
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
                        {props?.text46}
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
                        {props?.text47}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start pb-0.5 px-0.5 w-full">
                      <div className="flex flex-col gap-0.5 items-start justify-start mb-[7px] w-auto">
                        <Text
                          className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
                          size="txtInterMedium14Gray900_1"
                        >
                          {props?.text48}
                        </Text>
                        <Text
                          className="text-gray-900 text-xs tracking-[-0.13px] w-auto"
                          size="txtInterMedium12"
                        >
                          {props?.text49}
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
                        {props?.text50}
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
                        {props?.text52}
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
                        {props?.text53}
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
                        {props?.text54}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start pb-0.5 px-0.5 w-full">
                      <div className="flex flex-col gap-0.5 items-start justify-start mb-[7px] w-auto">
                        <Text
                          className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
                          size="txtInterMedium14Gray900_1"
                        >
                          {props?.text55}
                        </Text>
                        <Text
                          className="text-gray-900 text-xs tracking-[-0.13px] w-auto"
                          size="txtInterMedium12"
                        >
                          {props?.text56}
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
              {props?.button1}
            </Button>
            <Text
              className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray600"
            >
              {props?.text57}
            </Text>
            <Text
              className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray600"
            >
              {props?.text58}
            </Text>
            <Text
              className="text-[22px] sm:text-lg text-orange-400 md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Orange400"
            >
              {props?.text59}
            </Text>
            <Text
              className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray600"
            >
              {props?.text60}
            </Text>
            <Text
              className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray600"
            >
              {props?.text61}
            </Text>
            <Button
              className="!text-black-900 cursor-pointer font-inter font-medium h-[49px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px] w-[49px]"
              shape="square"
              color="gray_300"
              size="md"
              variant="fill"
            >
              {props?.button2}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

LikedTaleColumnseventyeight.defaultProps = {
  likedtaletitle: "좋아요 누른 동화",
  searchtitle: "작품명 검색",
  sorttitle: "최신순",
  text1: "신데렐라는 어려서 부모님을 잃고요",
  text3: "10p",
  text4: "5",
  text5: "5",
  text6: "유미엄마",
  text7: "2023. 10. 08",
  text8: "신데렐라는 어려서 부모님을 잃고요",
  text10: "10p",
  text11: "5",
  text12: "5",
  text13: "유미엄마",
  text14: "2023. 10. 08",
  text15: "신데렐라는 어려서 부모님을 잃고요",
  text17: "10p",
  text18: "5",
  text19: "5",
  text20: "유미엄마",
  text21: "2023. 10. 08",
  text22: "신데렐라는 어려서 부모님을 잃고요",
  text24: "10p",
  text25: "5",
  text26: "5",
  text27: "유미엄마",
  text28: "2023. 10. 08",
  text29: "신데렐라는 어려서 부모님을 잃고요",
  text31: "10p",
  text32: "5",
  text33: "5",
  text34: "유미엄마",
  text35: "2023. 10. 08",
  text36: "신데렐라는 어려서 부모님을 잃고요",
  text38: "10p",
  text39: "5",
  text40: "5",
  text41: "유미엄마",
  text42: "2023. 10. 08",
  text43: "신데렐라는 어려서 부모님을 잃고요",
  text45: "10p",
  text46: "5",
  text47: "5",
  text48: "유미엄마",
  text49: "2023. 10. 08",
  text50: "신데렐라는 어려서 부모님을 잃고요",
  text52: "10p",
  text53: "5",
  text54: "5",
  text55: "유미엄마",
  text56: "2023. 10. 08",
  button1: <>&lt;</>,
  text57: "2",
  text58: "3",
  text59: "4",
  text60: "5",
  text61: "6",
  button2: <>&gt;</>,
};

export default LikedTaleColumnseventyeight;
