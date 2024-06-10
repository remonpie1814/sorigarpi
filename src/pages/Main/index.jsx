//** 메인페이지 */
// 레이아웃과 포함된 컴포넌트 수정

import React from "react";

import { Img, Layout, Text, Carousel } from "components";
import { MainTaleColumn } from "components";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const images = [
    {
      src: "images/banner1.png",
      alt: "banner1",
      id: 1,
    },
    {
      src: "images/banner2.png",
      alt: "banner2",
      id: 2,
    },
    {
      src: "images/banner3.png",
      alt: "banner3",
      id: 3,
    },
    {
      src: "images/banner4.png",
      alt: "banner4",
      id: 4,
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <Layout>
        <Carousel images={images}></Carousel>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1180px] mx-auto md:px-5 py-5 w-full mb-[100px]">
          <div className="flex flex-col items-center justify-start md:px-10 sm:px-0 px-[247px] w-full">
            <div className="flex flex-col items-center justify-start w-full p-5 sm:p-0">
              <div
                className="bg-white-A700 flex flex-col items-start justify-start outline outline-[3px] outline-amber-400  px-[42px] py-6 rounded-[15px] w-[342px] sm:w-full cursor-pointer "
                onClick={() => {
                  navigate("/canvas");
                }}
              >
                <div className="flex flex-row items-center justify-start w-full ">
                  <Img
                    className="h-12 md:h-auto object-cover w-[46px] mr-6"
                    src="images/img_image528.png"
                    alt="image528"
                  />
                  <Text
                    className="text-[22px] text-amber-500 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-full"
                    size="txtInterExtraBold22"
                  >
                    나만의 동화 만들기
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between w-full md:gap-10">
            <div className="md:h-[30px] h-[33px] relative w-[13%]">
              <div className="bg-yellow-200 h-[30px] m-auto rounded-[15px] w-full"></div>
              <Text
                className="absolute h-max inset-[0] justify-center m-auto text-base text-black-900 text-center tracking-[-0.30px] w-max"
                size="txtInterMedium16Black900_1"
              >
                인기동화
              </Text>
            </div>
            <div className="flex flex-row items-center justify-end w-auto">
              <Text
                className="text-blue_gray-400 text-center text-sm tracking-[-0.27px] w-auto"
                size="txtInterMedium14Bluegray400"
              >
                더보기{" "}
              </Text>
              <Img
                className="h-[30px] md:h-auto object-cover w-[30px]"
                src="images/img_down31.png"
                alt="downThirtyOne"
              />
            </div>
          </div>
          <MainTaleColumn
            className="sm:flex-col flex-row md:gap-10 gap-[60px] grid md:grid-cols-1 grid-cols-2 justify-start w-full"
            images={[
              "images/img_image917.png",
              "images/img_image917.png",
              "images/img_image917.png",
              "images/img_image917.png",
              "images/img_image917.png",
              "images/img_image917.png",
            ]}
          />
          <div className="flex flex-row items-center justify-between w-full md:gap-10">
            <div className="md:h-[30px] h-[33px] relative w-[13%]">
              <div className="bg-yellow-200 h-[30px] m-auto rounded-[15px] w-full"></div>
              <Text
                className="absolute h-max inset-[0] justify-center m-auto text-base text-black-900 text-center tracking-[-0.30px] w-max"
                size="txtInterMedium16Black900_1"
              >
                신작동화
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-auto">
              <Text
                className="text-blue_gray-400 text-center text-sm tracking-[-0.27px] w-auto"
                size="txtInterMedium14Bluegray400"
              >
                더보기{" "}
              </Text>
              <Img
                className="h-[30px] md:h-auto object-cover w-[30px]"
                src="images/img_down31.png"
                alt="downThirtyTwo"
              />
            </div>
          </div>
          <MainTaleColumn
            className="sm:flex-col flex-row md:gap-10 gap-[60px] grid md:grid-cols-1 grid-cols-2 justify-start w-full"
            images={[
              "images/img_image917.png",
              "images/img_image917.png",
              "images/img_image917.png",
              "images/img_image917.png",
              "images/img_image917.png",
              "images/img_image917.png",
            ]}
          />
        </div>
      </Layout>
    </>
  );
};

export default MainPage;
